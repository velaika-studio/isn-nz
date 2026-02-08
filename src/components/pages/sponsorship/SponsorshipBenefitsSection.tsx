"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ALL_BENEFITS } from "@/lib/constants/sponsorship-details";
import { cn } from "@/lib/utils";

const cardContentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

/**
 * Displays sponsorship benefits using an interactive tabbed layout.
 */
export const SponsorshipBenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(ALL_BENEFITS[0]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-b from-background via-primary/5 to-background py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Benefits at a Glance
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
            A detailed breakdown of what each sponsorship tier offers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: Interactive Tabs */}
          <div className="space-y-2">
            {ALL_BENEFITS.map((BenefitType) => (
              <button
                key={BenefitType.name}
                onClick={() => setSelectedBenefit(BenefitType)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-lg p-4 text-left transition-colors duration-200",
                  "hover:bg-muted/50",
                  selectedBenefit.name === BenefitType.name
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground",
                )}
              >
                <BenefitType.icon className="size-6 flex-shrink-0" />
                <span className="font-semibold">{BenefitType.name}</span>
              </button>
            ))}
          </div>

          {/* Right Column: Animated Display Card */}
          <div className="lg:col-span-2">
            <Card className="flex min-h-[24rem] items-center justify-center overflow-hidden border-border/50 bg-card/60 p-8 backdrop-blur-sm shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBenefit.name}
                  variants={cardContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-center"
                >
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border bg-background/50">
                    <selectedBenefit.icon className="size-10 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">
                    {selectedBenefit.name}
                  </CardTitle>
                  <CardDescription className="mx-auto mt-4 max-w-md text-base">
                    {selectedBenefit.description}
                  </CardDescription>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
