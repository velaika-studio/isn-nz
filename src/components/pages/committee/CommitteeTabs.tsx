"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DomeGallery from "@/components/ui/dome-gallery/DomeGallery";
import { TABS } from "@/lib/constants/committee-data";
import type { CommitteeTabsPropsType } from "@/types/ui";

const FALLBACK_AVATAR_URL = "/images/avatar-fallback.png";

/**
 * A component that displays committee members in the provided DomeGallery.
 */
export const CommitteeTabs = ({
  activeTab,
  setActiveTab,
  committeeDataMap,
}: CommitteeTabsPropsType) => {
  const committeeData = committeeDataMap[activeTab];
  const galleryItems = committeeData.map((member) => ({
    src: member.image || FALLBACK_AVATAR_URL,
    alt: member.name,
    name: member.name,
    role: member.role,
    institution: member.institution,
  }));
  const activeTabConfig = TABS.find((tab) => tab.id === activeTab)!;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-background text-foreground"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Meet The Committee
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Our conference is shaped by a dedicated team of leading experts and
          professionals. Select a committee to view its members.
        </p>

        <div className="my-12 flex flex-wrap justify-center gap-2">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveTab(tab.id)}
                className="hover:text-white duration-300 ease-in-out"
              >
                <Icon className="mr-2 size-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        <div className="mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold">{activeTabConfig.label}</h3>
          <p className="mt-2 text-muted-foreground">
            {activeTabConfig.description}
          </p>
        </div>
      </div>
      <div className="relative -mt-16 h-[60vh] min-h-[500px] w-full xl:h-[90vh] bg-background overflow-hidden">
        {/* Stronger fade overlays for better blending */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-background via-background/90 via-30% to-transparent z-10 pointer-events-none" />

        <DomeGallery
          images={galleryItems}
          fit={0.65}
          minRadius={300}
          maxRadius={800}
          segments={35}
          dragSensitivity={20}
          maxVerticalRotationDeg={5}
          imageBorderRadius="20px"
          openedImageBorderRadius="20px"
          openedImageWidth="min(450px, 90vw)"
          openedImageHeight="min(450px, 90vw)"
          grayscale={true}
          overlayBlurColor="transparent"
        />
      </div>
    </motion.section>
  );
};
