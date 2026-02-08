"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/**
 * The final, visually striking Call-To-Action section for the brochure page.
 */
export const BrochureCtaSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* ✨ 1. The main CTA container with a glowing gradient border effect */}
        <div className="relative mx-auto max-w-4xl rounded-2xl bg-gradient-to-b from-primary/20 to-primary/60 p-1 shadow-2xl shadow-primary/20">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-background/95 p-8 text-center backdrop-blur-xl md:p-12">
            {/* ✨ 2. A prominent icon to anchor the design */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary bg-primary/10">
              <MapPin className="size-8 text-primary" />
            </div>

            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-5xl">
              Join Us
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              We look forward to welcoming you to this premier Nephrology
              conference and sharing a landmark academic experience.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/registration">
                  Register Today
                  <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/committee">
                  <Users className="mr-2 size-5" />
                  View Organizing Committee
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
