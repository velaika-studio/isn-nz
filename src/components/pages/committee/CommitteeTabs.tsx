"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TABS } from "@/lib/constants/committee-data";
import type { CommitteeTabsPropsType } from "@/types/ui";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { OrganizerPropsType } from "@/types/common";

const FALLBACK_AVATAR_URL = "/images/avatar-fallback.png";

/**
 * A component that displays committee members in a card-based grid layout.
 */
export const CommitteeTabs = ({
  activeTab,
  setActiveTab,
  committeeDataMap,
}: CommitteeTabsPropsType) => {
  const committeeData = committeeDataMap[activeTab];
  const activeTabConfig = TABS.find((tab) => tab.id === activeTab)!;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-background text-foreground"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 text-center">
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

        <div className="mx-auto max-w-2xl mb-16 px-4">
          <h3 className="text-2xl font-bold">{activeTabConfig.label}</h3>
          <p className="mt-2 text-muted-foreground">
            {activeTabConfig.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-2 md:px-4">
          {committeeData.map((member, index) => (
            <MemberCard key={`${member.name}-${index}`} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/**
 * ✨ A simple, elegant card for committee members.
 */
const MemberCard = ({ member }: { member: OrganizerPropsType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className=" py-0 flex h-full flex-col overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5">
        <div className="aspect-square w-full overflow-hidden bg-muted/30">
          <img
            src={member.image || FALLBACK_AVATAR_URL}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
        <CardHeader className="flex flex-1 flex-col p-5 text-left">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold leading-snug text-foreground">
              {member.name}
            </CardTitle>
            <CardDescription className="font-medium text-primary text-sm tracking-wide">
              {member.role}
            </CardDescription>
          </div>
          <div className="mt-4 border-t border-border/40 pt-4">
            <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 italic">
              {member.institution}
            </p>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};
