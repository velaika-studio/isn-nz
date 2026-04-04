"use client";

import { CountdownSection } from "../shared/CountdownTimer";
import { OrganizerSection } from "./OrganizerSection";
import { WelcomeMessage } from "./WelcomeMessage";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      <WelcomeSection />
      <div className="py-8 md:py-12 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <CountdownSection />
        </div>
      </div>
      <CommitteeSection />
    </div>
  );
}

const WelcomeSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-background to-background">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-[5%] w-64 h-64 bg-white/5 backdrop-blur-sm rounded-full opacity-60" />
      <div className="absolute bottom-1/4 right-[5%] w-48 h-48 bg-primary/5 backdrop-blur-sm rounded-full opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-primary/10 to-transparent rotate-30" />
    </div>
    <div className="relative z-10">
      <WelcomeMessage />
    </div>
  </section>
);

const CommitteeSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[140px] opacity-70" />
      <div className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-primary/7 rounded-full blur-[120px] opacity-60" />
      <div className="absolute top-1/3 right-[10%] w-64 h-64 border border-white/6 rounded-full opacity-40" />
      <div className="absolute bottom-1/3 left-[10%] w-48 h-48 border border-primary/8 rounded-full opacity-35" />
      <div className="absolute top-1/2 left-1/3 w-1 h-28 bg-gradient-to-b from-transparent via-primary/15 to-transparent rotate-60" />
      <div className="absolute top-2/3 right-1/3 w-1 h-36 bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-30" />
      <div className="absolute top-16 left-16 w-24 h-24 pointer-events-none hidden lg:block">
        <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-primary/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
      </div>
      <div className="absolute bottom-16 right-16 w-24 h-24 pointer-events-none hidden lg:block">
        <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
    </div>
    <div className="relative z-10">
      <OrganizerSection />
    </div>
  </section>
);
