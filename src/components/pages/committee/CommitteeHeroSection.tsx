"use client";

import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Home, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";

const IMAGE_PATH = "/images/committee-page.svg";

/**
 * Hero section for the Committee page with enhanced styling and consistency.
 */
export const CommitteeHeroSection = () => {
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
            alt="Committee Background"
            fill
            className="object-contain opacity-20"
            priority
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6 text-white">
        <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Home className="size-4" /> Home
          </Link>
          <ChevronRight className="size-4 opacity-60" />
          <span className="font-medium text-white">Committee</span>
        </nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Our <span className="text-primary">Committee</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-200"
        >
          Meet the dedicated team of experts behind NZ-ISNCON 2026, working
          collaboratively to advance nephrology care and professional growth.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Badge
            variant="outline"
            className="gap-2 border-white/20 bg-white/10 text-sm font-medium text-white backdrop-blur-sm"
          >
            <CalendarDays className="size-4 text-primary" />
            {CONFERENCE_DETAILS.WELCOME_EVENT_DETAILS.dates}
          </Badge>
          <Badge
            variant="outline"
            className="gap-2 border-white/20 bg-white/10 text-sm font-medium text-white backdrop-blur-sm"
          >
            <MapPin className="size-4 text-primary" />
            {CONFERENCE_DETAILS.address.line2 +
              ", " +
              CONFERENCE_DETAILS.address.line3}
          </Badge>
        </div>
      </div>
    </motion.section>
  );
};
