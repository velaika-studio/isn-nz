"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { conferenceHighlights } from "@/lib/constants/brochureData";
import type { ConferenceHighlight } from "@/types/ui";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * A section displaying the key highlights of the conference program.
 */
export const BrochureHighlightsSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Scientific Program Highlights
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Explore a comprehensive program designed to advance your knowledge
            in Nephrology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferenceHighlights.map((highlight) => (
            <HighlightCard key={highlight.title} highlight={highlight} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/**
 * ✨ A new card design from scratch, featuring an animated outline-to-fill icon.
 */
const HighlightCard = ({ highlight }: { highlight: ConferenceHighlight }) => {
  const Icon = highlight.icon;
  return (
    <motion.div variants={cardVariants} className="h-full">
      <Card className="group h-full border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-card hover:shadow-xl hover:-translate-y-1.5">
        {/* Animated Icon Container */}
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary bg-primary/5 transition-colors duration-300 group-hover:bg-primary">
          <Icon className="size-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-foreground">
            {highlight.title}
          </h3>
          <p className="mt-2 text-muted-foreground">{highlight.description}</p>
        </div>
      </Card>
    </motion.div>
  );
};
