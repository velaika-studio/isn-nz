"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { CommitteeCtaSection } from "@/components/pages/committee/CommitteeCtaSection";
import { CommitteeHeroSection } from "@/components/pages/committee/CommitteeHeroSection";
import { CommitteeTabs } from "@/components/pages/committee/CommitteeTabs";
import {
  ADVISORS_DATA,
  INTERNATIONAL_FACULTY_DATA,
  NATIONAL_FACULTY_DATA,
  ORGANIZERS_DATA,
  PATRONS_DATA,
  SCIENTIFIC_COMMITTEE_DATA,
} from "@/lib/constants/organizer-details";
import type { CommitteeTypeType } from "@/types/ui";

/**
 * Displays the conference committee members, organized into tabs.
 */
export default function CommitteePage() {
  const [activeTab, setActiveTab] = useState<CommitteeTypeType>("organizing");

  const committeeData = {
    patrons: PATRONS_DATA,
    advisors: ADVISORS_DATA,
    organizing: ORGANIZERS_DATA,
    scientific: SCIENTIFIC_COMMITTEE_DATA,
    international: INTERNATIONAL_FACULTY_DATA,
    national: NATIONAL_FACULTY_DATA,
  };

  return (
    <Layout>
      <CommitteeHeroSection />
      <CommitteeTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        committeeDataMap={committeeData}
      />
      <CommitteeCtaSection />
    </Layout>
  );
}
