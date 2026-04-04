"use client";

import Layout from "@/components/layout/Layout";
import { ScientificProgramHeroSection } from "@/components/pages/scientific-program/ScientificProgramHeroSection";
import { SessionHighlightsSection } from "@/components/pages/scientific-program/SessionHighlightsSection";
import { ProgramScheduleSection } from "@/components/pages/scientific-program/ProgramScheduleSection";

/**
 * Scientific Program page
 */
export default function ScientificProgramPage() {
  return (
    <Layout>
      <ScientificProgramHeroSection />
      <SessionHighlightsSection />
      <ProgramScheduleSection />
    </Layout>
  );
}
