/**
 * Live Google rating and review count for the salon's Business Profile.
 *
 * Source: Google Places API (New), Place Details, requesting only `rating` and
 * `userRatingCount`. Needs two server-side environment variables:
 *
 *   GOOGLE_PLACES_API_KEY   a key with "Places API (New)" enabled
 *   GOOGLE_PLACE_ID         the salon's Place ID
 *
 * Without them — or if Google is slow, down, or returns something implausible —
 * this quietly returns the static RATING from lib/site.ts, so the site never
 * shows a blank or a broken number. Pages re-fetch at most every six hours
 * (ISR), so a new review appears without a deploy.
 *
 * The key is read on the server only and never reaches the browser. Restrict it
 * in Google Cloud to the Places API.
 */

import { RATING, SOCIAL } from "./site";

export type GoogleRating = {
  /** Average rating, one decimal place, 1–5. */
  readonly value: number;
  readonly count: number;
  /** True when the numbers came from Google just now rather than the fallback. */
  readonly live: boolean;
  /** Where "read the reviews" should go. */
  readonly url: string;
};

const REVALIDATE_SECONDS = 21_600;

const FALLBACK: GoogleRating = {
  value: RATING.value,
  count: RATING.count,
  live: false,
  url: SOCIAL.google,
};

type PlaceDetails = {
  readonly rating?: number;
  readonly userRatingCount?: number;
};

export async function getGoogleRating(): Promise<GoogleRating> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return FALLBACK;

  const reviewsUrl = `https://search.google.com/local/reviews?placeid=${encodeURIComponent(placeId)}`;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          // Places bills by the fields requested, so ask for these two and nothing else.
          "X-Goog-FieldMask": "rating,userRatingCount",
        },
        next: { revalidate: REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(6_000),
      },
    );

    if (!response.ok) {
      console.error(`Google rating request failed with status ${response.status}.`);
      return { ...FALLBACK, url: reviewsUrl };
    }

    const place = (await response.json()) as PlaceDetails;
    const rating = place.rating;
    const count = place.userRatingCount;

    const plausible =
      typeof rating === "number" &&
      typeof count === "number" &&
      rating >= 1 &&
      rating <= 5 &&
      Number.isInteger(count) &&
      count >= 1;

    if (!plausible) return { ...FALLBACK, url: reviewsUrl };

    return {
      value: Math.round(rating * 10) / 10,
      count,
      live: true,
      url: reviewsUrl,
    };
  } catch (error) {
    console.error("Google rating request failed.", error);
    return { ...FALLBACK, url: reviewsUrl };
  }
}
