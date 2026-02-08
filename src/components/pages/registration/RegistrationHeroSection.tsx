"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { REGISTRATION_LINK } from "@/lib/constants/registration-data";

const IMAGE_PATH = "/images/registeration-page.svg";

/**
 * Hero section for the Registration page with enhanced styling and consistency.
 */
export const RegistrationHeroSection = () => {
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
            alt="Registration Background"
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
          <span className="font-medium text-white">Registration</span>
        </nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Register for <span className="text-primary">NZ-ISNCON 2026</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-200"
        >
          Secure your place at the premier nephrology conference of the year.
          Join us for an inspiring event filled with scientific learning,
          innovation, and networking.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-10 inline-block"
        >
          {/* The glow effect */}
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-2xl" />

          <div>
            <Button size="lg" asChild>
              <Link
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
                <ArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
