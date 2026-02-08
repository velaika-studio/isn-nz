"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Star, UserCheck, Users } from "lucide-react";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  EARLY_BIRD_END_DATE,
  PRICING_OPTIONS,
  REGULAR_END_DATE,
} from "@/lib/constants/registration-data";
import { cn } from "@/lib/utils";
import { PaymentSection } from "./PaymentSection";
import { RegistrationSection } from "./RegistrationSection";

type PricingPeriod = "early" | "regular" | "spot";

/**
 * Redesigned registration fees section with modern pricing table
 */
export const RegistrationFeesSection = ({
  isEarlyBird,
}: {
  isEarlyBird: boolean;
}) => {
  const currentDate = new Date();
  const isRegularPeriod =
    currentDate >= EARLY_BIRD_END_DATE && currentDate < REGULAR_END_DATE;
  const isSpotRegistration = currentDate >= REGULAR_END_DATE;

  const getActivePeriod = (): PricingPeriod => {
    if (isEarlyBird) return "early";
    if (isRegularPeriod) return "regular";
    return "spot";
  };

  const [selectedPeriod, setSelectedPeriod] =
    useState<PricingPeriod>(getActivePeriod());

  const pricingPeriods = [
    {
      id: "early" as PricingPeriod,
      title: "Early Bird",
      date: "Up to 15th Feb 2026",
      active: isEarlyBird,
    },
    {
      id: "regular" as PricingPeriod,
      title: "Regular",
      date: "16th Feb - 15th Mar 2026",
      active: isRegularPeriod,
    },
    {
      id: "spot" as PricingPeriod,
      title: "Spot",
      date: "After 15th Mar 2026",
      active: isSpotRegistration,
    },
  ];

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("student")) return Users;
    if (category.toLowerCase().includes("accompanying")) return UserCheck;
    return Star;
  };

  const getPrice = (
    option: (typeof PRICING_OPTIONS)[0],
    period: PricingPeriod,
  ) => {
    switch (period) {
      case "early":
        return option.earlyBird;
      case "regular":
        return option.regular;
      case "spot":
        return option.spotRegistration || option.regular;
      default:
        return option.earlyBird;
    }
  };

  const selectedPeriodData = pricingPeriods.find(
    (p) => p.id === selectedPeriod,
  )!;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Registration Fees
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            All fees are in Indian Rupees (INR) and include conference
            materials, lunch, and refreshments during the event.
          </motion.p>
        </div>

        {/* Period Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border/50 bg-muted/30 p-1">
            {pricingPeriods.map((period: any) => (
              <button
                key={period.id}
                type="button"
                onClick={() => setSelectedPeriod(period.id)}
                className={cn(
                  "relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200",
                  selectedPeriod === period.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {period.title}
                {period.active && (
                  <span className="absolute -right-1 -top-1 flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-accent" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Date Badge */}
        <div className="mb-8 text-center">
          <Badge variant="outline" className="px-4 py-1.5 text-sm">
            {selectedPeriodData.date}
          </Badge>
        </div>

        {/* Pricing Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPeriod}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Category
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                      Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_OPTIONS.map((option: any, index: number) => {
                    const CategoryIcon = getCategoryIcon(option.category);
                    const price = getPrice(option, selectedPeriod);
                    return (
                      <motion.tr
                        key={option.category}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                        className="border-b border-border/30 last:border-0"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                              <CategoryIcon className="size-5 text-primary" />
                            </div>
                            <span className="font-medium text-foreground">
                              {option.category}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <span className="text-2xl font-bold text-primary">
                            {price}
                          </span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Registration Section */}
        <div className="mb-12 text-center">
          <h3 className="font-serif text-3xl font-bold tracking-tight">
            Register Now
          </h3>
          <p className="mt-2 text-muted-foreground">
            Complete your registration via form or scan QR code
          </p>
        </div>

        <RegistrationSection />

        {/* Payment Section */}
        <div className="mb-12 mt-20 text-center">
          <h3 className="font-serif text-3xl font-bold tracking-tight">
            Payment Options
          </h3>
          <p className="mt-2 text-muted-foreground">
            Choose your preferred payment method
          </p>
        </div>

        <PaymentSection />

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Alert className="border-primary/30 bg-primary/5">
            <AlertCircle className="size-5 text-primary" />
            <AlertTitle className="font-semibold">Important</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              After payment, please complete the registration form to confirm
              your spot. All fees are non-refundable. For any queries, contact
              the organizing committee.
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </motion.section>
  );
};
