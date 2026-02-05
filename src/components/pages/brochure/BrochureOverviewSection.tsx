"use client";

import { motion } from "framer-motion";
import { overviewItems } from "@/lib/constants/brochureData";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

/**
 * A section providing a brief overview of the conference with a dynamic two-column layout.
 */
export const BrochureOverviewSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full overflow-hidden py-16 md:py-24 bg-gradient-to-b from-primary/5 via-transparent to-transparent flex items-center justify-center"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="mb-4 h-1.5 w-16 bg-primary/20 rounded-full" />
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              About The Conference
            </h2>
            <p className="mt-4 text-base font-semibold text-primary md:text-lg">
              Comprehensive Nephrology Education, Expert-Led Sessions, and
              Clinical Excellence
            </p>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              NZ-ISNCON 2026 is a premier nephrology conference bringing
              together leading experts from across the Indian Society of
              Nephrology - North Zone. This three-day event features
              comprehensive sessions on Clinical Nephrology, Dialysis
              Innovations, Kidney Transplantation, Critical Care Nephrology, and
              specialized pediatric and geriatric care.
            </p>
          </div>
          <div className="space-y-8">
            {overviewItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary/5 border border-primary/20 p-3 rounded-xl shadow-sm">
                      <Icon className="size-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
