"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const IMAGE_PATH = "/images/sponsorship-page.svg";

/**
 * Hero section for the Sponsorship page with enhanced styling and consistency.
 */
export const SponsorshipHeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full overflow-hidden py-24 text-center md:py-32"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <Image
            src={IMAGE_PATH}
            alt="Sponsorship Background"
            fill
            className="object-contain opacity-20"
            priority
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6 text-white">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-200">
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Home className="size-4" /> Home
          </Link>
          <ChevronRight className="size-4 opacity-60" />
          <span className="font-medium text-white">Sponsorship</span>
        </nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Partnership <span className="text-primary">Opportunities</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-200"
        >
          Showcase your brand to a dedicated audience of nephrologists and
          healthcare leaders. Partner with NZ-ISNCON 2026 to gain valuable
          exposure and connect with key decision-makers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" asChild className="shadow-lg shadow-primary/20">
            <Link href="/contact">Become a Sponsor</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
          >
            <a href="#sponsorship-tiers" className="hover:text-white">
              View Tiers <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
