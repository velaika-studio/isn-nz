"use client";

import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Home, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";

const IMAGE_PATH = "/images/contact-page.svg";

/**
 * Hero section for the Contact page with enhanced styling and consistency.
 */
export const ContactHeroSection = () => {
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
            alt="Contact Background"
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
          <span className="font-medium text-white">Contact Us</span>
        </nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Get in <span className="text-primary">Touch</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-200"
        >
          Our team is ready to assist you with registration, abstract
          submissions, sponsorship opportunities, or any other inquiries about
          NZ-ISNCON 2026.
        </motion.p>

        <Button size="lg" asChild className="mt-10">
          <a href={CONFERENCE_DETAILS.contact.emailHref}>
            <Mail className="mr-2 size-5" />
            Email the Secretariat
          </a>
        </Button>

        {/* ✨ Consistent badge styling for secondary info */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Badge
            variant="outline"
            className="gap-2 border-white/20 bg-white/10 text-sm font-medium backdrop-blur-sm text-white"
          >
            <CalendarDays className="size-4 text-primary" />
            {CONFERENCE_DETAILS.WELCOME_EVENT_DETAILS.dates}
          </Badge>
          <Badge
            variant="outline"
            className="gap-2 border-white/20 bg-white/10 text-sm font-medium backdrop-blur-sm text-white"
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
