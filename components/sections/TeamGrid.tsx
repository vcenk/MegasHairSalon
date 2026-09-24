import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { TeamMember } from "@/lib/team";

export function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  return (
    <Reveal delay={(index % 4) * 110} className="rv-curtain">
      <Link href={`/team/${member.slug}`} className="group block">
        {/* Desaturated so eight portraits shot by eight different people read
            as one team; colour returns on hover. */}
        <div className="curtain relative aspect-3/4 overflow-hidden rounded-sm bg-clay">
          <Image
            src={member.portrait}
            alt={member.portraitAlt}
            fill
            sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        </div>
        <h3 className="mt-5 font-display text-xl text-ink transition-colors duration-300 group-hover:text-copper">
          {member.name}
          {member.alternateName && (
            <span className="text-muted"> “{member.alternateName}”</span>
          )}
        </h3>
        <p className="mt-1 text-sm text-muted">{member.title}</p>
        {/* Years where we have them; otherwise the Phorest booking level, which
            is real data — never a blank slot and never an invented number. */}
        <p className="mt-1 font-sans text-[0.6875rem] uppercase tracking-[0.18em] text-copper">
          {member.years !== null ? `${member.years} years` : member.level}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          <span className="mr-2 font-sans font-medium uppercase tracking-[0.16em] text-ink">
            Languages
          </span>
          {member.languages.join(" · ")}
        </p>
      </Link>
    </Reveal>
  );
}

export function TeamGrid({ members }: { members: readonly TeamMember[] }) {
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member, index) => (
        <TeamCard key={member.slug} member={member} index={index} />
      ))}
    </div>
  );
}
