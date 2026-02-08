"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * A final Call-To-Action section for the Committee page.
 */
export const CommitteeCtaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="w-full py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-transparent"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Engage with the Experts
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Be part of an exceptional conference and connect with our
            distinguished committee members and faculty.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/registration">
                Register Now
                <ArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact" className="hover:text-white">
                <Phone className="mr-2 size-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
