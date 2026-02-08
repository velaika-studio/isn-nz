"use client";

import { motion } from "framer-motion";
import { Handshake, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * A final, visually engaging Call-To-Action section for the Sponsorship page.
 */
export const SponsorshipCtaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-16 md:py-24"
    >
      {/* Decorative element */}
      <Handshake className="absolute -left-16 top-1/2 -z-10 size-96 -translate-y-1/2 -rotate-12 text-primary/5" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border-2 border-primary bg-primary/10">
            <Handshake className="size-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Partner with Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Contact our team to discuss sponsorship packages and secure your
            partnership for NZ-ISNCON 2026. We look forward to collaborating
            with you.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Mail className="mr-2 size-5" />
                Contact Us for Sponsorship
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
