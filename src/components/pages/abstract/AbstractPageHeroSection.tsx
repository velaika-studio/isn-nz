"use client";

import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Home, MapPin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ABSTRACT_SUBMISSION_FORM_LINK } from "@/lib/constants/abstractData";
import { ConferenceDetails } from "@/lib/constants/contact";

const IMAGE_PATH = "/images/abstract-page.svg";

/**
 * Hero section for the Abstract Guidelines page with an image background.
 */
export const AbstractPageHeroSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative w-full overflow-hidden py-24 md:py-32"
  >
    {/* Background Image */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <Image
        src={IMAGE_PATH}
        alt="Abstract Guidelines Background"
        fill
        className="object-contain opacity-20"
        priority
      />
    </div>

    {/* Overlay to ensure text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

    <div className="container relative z-10 mx-auto px-4 text-center text-white">
      {/* Breadcrumbs */}
      <nav className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-200">
        <Link
          href="/"
          className="flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <Home className="size-4" />
          Home
        </Link>
        <ChevronRight className="size-4" />
        <span className="font-medium text-white">Abstract Guidelines</span>
      </nav>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tighter md:text-6xl">
        Abstract Submission Guidelines
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-lg md:text-xl text-gray-300">
        We invite you to contribute to NZ-ISNCON 2026. Share your research with
        leading experts in nephrology, clinical kidney health, and
        transplantation medicine.
      </p>

      {/* Event Details */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-2">
          <CalendarDays className="size-4 text-primary" />
          <span className="font-medium text-white">
            {ConferenceDetails.eventDetails.dates}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="size-4 text-primary" />
          <span className="font-medium text-white">
            {ConferenceDetails.address.line3}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          size="lg"
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90"
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
        {/* <Button
          size="lg"
          variant="outline"
          asChild
          className="border-white text-black dark:text-white hover:bg-white/10"
        >
          <Link href={GUIDELINES_DOC_PATH}>
            <Download className="mr-2 size-5" />
            Download Guidelines
          </Link>
        </Button> */}
      </div>
    </div>
  </motion.section>
);
