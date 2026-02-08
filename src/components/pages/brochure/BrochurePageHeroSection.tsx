"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Download,
  Home,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const IMAGE_PATH = "/images/brochure-page.svg";

/**
 * The main hero section for the conference brochure page, featuring an image background.
 */
export const BrochurePageHeroSection = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full overflow-hidden py-24 text-center md:py-32"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <Image
            src={IMAGE_PATH}
            alt="Conference Brochure Background"
            fill
            className="object-contain opacity-20"
            priority
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-center text-center text-white">
        {/* Breadcrumbs */}
        <motion.nav
          variants={itemVariants}
          className="mb-8 flex items-center justify-center gap-2 text-sm text-gray-200"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Home className="size-4" /> Home
          </Link>
          <ChevronRight className="size-4 opacity-60" />
          <span className="font-medium text-white">Conference Brochure</span>
        </motion.nav>
        {/* Organization Logos */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex flex-col items-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Organized by the Indian Society of Nephrology - North Zone (ISN-NZ)
          </p>
          <div className="flex items-center justify-center gap-6">
            <Logo src="/isn-logo.png" alt="ISN logo" />
            <Logo src="/nz-isncon-logo.png" alt="NZ-ISN logo" />
            <Logo src="/dna-logo.png" alt="DNA logo" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl uppercase"
        >
          NZ-ISNCON 2026
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="mt-2 text-xl font-medium text-primary md:text-2xl lg:text-3xl"
        >
          Advancing Nephrology Through Innovation and Clinical Excellence
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-200"
        >
          A premier nephrology conference featuring comprehensive sessions on
          Clinical Nephrology, Dialysis Innovations, Kidney Transplantation, and
          Critical Care Nephrology with renowned national and international
          faculty.
        </motion.p>

        {/* Event Details & Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 w-full max-w-lg rounded-2xl border border-border/50 bg-black/20 p-6 backdrop-blur-sm shadow-2xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" />
              <span className="font-semibold">
                {CONFERENCE_DETAILS.WELCOME_EVENT_DETAILS.dates}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              <span className="font-semibold">
                {CONFERENCE_DETAILS.address.line2 +
                  ", " +
                  CONFERENCE_DETAILS.address.line3}
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
            >
              <Link href="/registration">
                Register Now <ArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link
                href="/files/isn-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 size-5" /> Download Brochure
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative size-24 rounded-full border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1">
    <Image src={src} alt={alt} fill className="object-contain" priority />
  </div>
);
