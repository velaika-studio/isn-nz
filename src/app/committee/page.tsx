"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { CommitteeCtaSection } from "@/components/pages/committee/CommitteeCtaSection";
import { CommitteeHeroSection } from "@/components/pages/committee/CommitteeHeroSection";
import { CommitteeTabs } from "@/components/pages/committee/CommitteeTabs";
import {
  advisorsData,
  internationalFacultyData,
  nationalFacultyData,
  organizersData,
  patronsData,
  scientificCommitteeData,
} from "@/lib/constants/organizerDetails";
import type { CommitteeType } from "@/types/ui";

/**
 * Displays the conference committee members, organized into tabs.
 */
export default function CommitteePage() {
  const [activeTab, setActiveTab] = useState<CommitteeType>("organizing");

  const committeeData = {
    patrons: patronsData,
    advisors: advisorsData,
    organizing: organizersData,
    scientific: scientificCommitteeData,
    international: internationalFacultyData,
    national: nationalFacultyData,
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
