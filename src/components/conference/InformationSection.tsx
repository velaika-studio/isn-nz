"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { informationCardsData } from "@/lib/constants/informationCards";
import { cn } from "@/lib/utils";
import type { InfoCardPropsType } from "@/types";

// --- Main Section Component ---

/**
 * A refined section showcasing important conference information with a clean, interactive design.
 */
export const ImportantInformationSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    className="relative w-full overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
    aria-labelledby="info-section-title"
  >
    <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
      <InformationHeader />
      <InformationGrid />
    </div>
  </motion.section>
);

// --- Sub-components ---

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/**
 * ✨ A cleaner header that puts the focus on the cards below.
 */
const InformationHeader = () => (
  <motion.div variants={itemVariants} className="mb-12 text-center">
    <h2
      id="info-section-title"
      className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
    >
      Conference Information
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
      Everything you need to know about NZ-ISNCON 2026 and how to make the most
      of your participation.
    </p>
  </motion.div>
);

const InformationGrid = () => (
  <motion.div
    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    className="grid grid-cols-1 gap-6 md:grid-cols-2"
  >
    {informationCardsData.map((card, index) => (
      <InfoCard key={index} card={card} index={index} />
    ))}
  </motion.div>
);

/**
 * ✨ A redesigned, fully-clickable info card with a clean hover effect.
 */
const InfoCard = ({
  card,
  index,
}: {
  card: InfoCardPropsType;
  index: number;
}) => {
  const { title, description, icon, href, disabled } = card;

  const CardContentWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group h-full"
    >
      <Card
        className={cn(
          "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-card/80 p-8 backdrop-blur-sm transition-all duration-300",
          disabled
            ? "cursor-not-allowed bg-muted/50"
            : "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2",
        )}
      >
        {children}
      </Card>
    </motion.div>
  );

  const content = (
    <>
      <div>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border bg-background">
          <div
            className={cn(
              "text-primary [&>svg]:w-7 [&>svg]:h-7",
              disabled && "text-muted-foreground/50",
            )}
          >
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        {description && (
          <p className="mt-2 text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="mt-6">
        {disabled ? (
          <Badge variant="secondary">Coming Soon</Badge>
        ) : (
          <div className="flex items-center text-sm font-semibold text-primary">
            View Details
            <ArrowUpRight className="ml-1.5 size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        )}
      </div>
    </>
  );

  if (disabled) {
    return <CardContentWrapper>{content}</CardContentWrapper>;
  }

  return (
    <Link href={href} className="h-full">
      <CardContentWrapper>{content}</CardContentWrapper>
    </Link>
  );
};
