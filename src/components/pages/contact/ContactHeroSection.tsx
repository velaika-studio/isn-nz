"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Home, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConferenceDetails } from "@/lib/constants/contact";
import { Badge } from "@/components/ui/badge";

const IMAGE_PATH = "/images/contact-page.svg";

/**
 * A hero section for the Contact page, consistent with the site's established style.
 */
export const ContactHeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative w-full overflow-hidden py-24 text-center md:py-32"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <Image
          src={IMAGE_PATH}
          alt="Contact Background"
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      <div className="container relative z-10 mx-auto px-4 text-white">
        <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-primary"
          >
            <Home className="size-4" /> Home
          </Link>
          <ChevronRight className="size-4" />
          <span className="font-medium text-white">Contact</span>
        </nav>

        {/* ✨ Content is now directly on the video overlay */}
        <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Our team is ready to assist you with registration, abstract
          submissions, sponsorship opportunities, or any other inquiries about
          NZ-ISNCON 2026.
        </p>

        <Button size="lg" asChild className="mt-10">
          <a href={ConferenceDetails.contact.emailHref}>
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
            {ConferenceDetails.eventDetails.dates}
          </Badge>
          <Badge
            variant="outline"
            className="gap-2 border-white/20 bg-white/10 text-sm font-medium backdrop-blur-sm text-white"
          >
            <MapPin className="size-4 text-primary" />
            {ConferenceDetails.address.line2 + ", " + ConferenceDetails.address.line3}
          </Badge>
        </div>
      </div>
    </motion.section>
  );
};
