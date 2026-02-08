"use client";

import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Home, MapPin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ABSTRACT_SUBMISSION_FORM_LINK } from "@/lib/constants/abstract-data";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";

const IMAGE_PATH = "/images/abstract-page.svg";

/**
 * Hero section for the Abstract Guidelines page with enhanced styling and consistency.
 */
export const AbstractPageHeroSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative w-full overflow-hidden py-24 md:py-32"
  >
    {/* Background Image with Gradient Overlay */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <Image
          src={IMAGE_PATH}
          alt="Abstract Guidelines Background"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
    </div>

    <div className="container relative z-10 mx-auto px-4 text-center text-white">
      {/* Breadcrumbs */}
      <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-200">
        <Link
          href="/"
          className="flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <Home className="size-4" />
          Home
        </Link>
        <ChevronRight className="size-4 opacity-60" />
        <span className="font-medium text-white">Abstract Guidelines</span>
      </nav>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
      >
        Abstract Submission Guidelines
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mb-10 max-w-3xl text-lg text-gray-200 md:text-xl"
      >
        We invite you to contribute to NZ-ISNCON 2026. Share your research with
        leading experts in nephrology, clinical kidney health, and
        transplantation medicine.
      </motion.p>

      {/* Event Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
      >
        <div className="flex items-center gap-2.5 rounded-lg bg-black/20 px-4 py-2 backdrop-blur-sm">
          <CalendarDays className="size-4 text-primary" />
          <span className="font-semibold text-white">
            {CONFERENCE_DETAILS.WELCOME_EVENT_DETAILS.dates}
          </span>
        </div>
        <div className="flex items-center gap-2.5 rounded-lg bg-black/20 px-4 py-2 backdrop-blur-sm">
          <MapPin className="size-4 text-primary" />
          <span className="font-semibold text-white">
            {CONFERENCE_DETAILS.address.line3}
          </span>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Button
          size="lg"
          asChild
          className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
        >
          <Link
            href={ABSTRACT_SUBMISSION_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send className="mr-2 size-5" />
            Submit Abstract via Form
          </Link>
        </Button>
      </motion.div>
    </div>
  </motion.section>
);
