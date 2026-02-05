"use client";

import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Home, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ConferenceDetails } from "@/lib/constants/contact";

const IMAGE_PATH = "/images/committee-page.svg";

/**
 * A visually enhanced hero section for the Committee page with an image background.
 */
export const CommitteeHeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative w-full overflow-hidden py-24 text-center md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <Image
          src={IMAGE_PATH}
          alt="Committee Background"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6 text-white">
        <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Home className="size-4" /> Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="font-medium text-white">Committee</span>
        </nav>

        <h1 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">
          Conference Committee
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Meet the dedicated team of experts behind NZ-ISNCON 2026, working
          collaboratively to advance nephrology care and professional growth.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Badge
            variant="outline"
            className="gap-2 border-white/20 bg-white/10 text-sm font-medium text-white backdrop-blur-sm"
          >
            <CalendarDays className="size-4 text-primary" />
            {ConferenceDetails.eventDetails.dates}
          </Badge>
          <Badge
            variant="outline"
            className="gap-2 border-white/20 bg-white/10 text-sm font-medium text-white backdrop-blur-sm"
          >
            <MapPin className="size-4 text-primary" />
            {ConferenceDetails.address.line2 +
              ", " +
              ConferenceDetails.address.line3}
          </Badge>
        </div>
      </div>
    </motion.section>
  );
};
