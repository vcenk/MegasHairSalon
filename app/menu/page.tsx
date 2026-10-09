import { permanentRedirect } from "next/navigation";
import { BOOKING } from "@/lib/site";

export default function MenuPage() {
  permanentRedirect(BOOKING.url);
}
