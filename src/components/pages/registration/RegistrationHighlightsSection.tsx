"use client";

import { motion } from "framer-motion";
import { REGISTRATION_HIGHLIGHTS } from "@/lib/constants/registration-data";

/**
 * A section highlighting the key benefits of attending the conference.
 */
export const RegistrationHighlightsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="relative flex w-full items-center justify-center overflow-hidden py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            An Unparalleled Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
            Join us for an event designed to inspire, educate, and connect.
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-12">
            {REGISTRATION_HIGHLIGHTS.map(
              (HighlightType: any, index: number) => {
                const Icon = HighlightType.icon;
                const isLastItem = index === REGISTRATION_HIGHLIGHTS.length - 1;

                return (
                  <motion.div
                    key={HighlightType.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Connection line */}
                    {!isLastItem && (
                      <div
                        className="absolute left-6 top-14 h-full w-px bg-gradient-to-b from-primary/60 via-primary/40 to-transparent"
                        aria-hidden="true"
                      />
                    )}

                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      />
                      <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-primary/30 bg-background/80 backdrop-blur-sm shadow-lg">
                        <Icon className="size-6 text-primary" />
                      </div>
                    </div>

                    <div className="w-full overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-xl">
                      <h3 className="text-xl font-bold text-foreground">
                        {HighlightType.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {HighlightType.description}
                      </p>
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
