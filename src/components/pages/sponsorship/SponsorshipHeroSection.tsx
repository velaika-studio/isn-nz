"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMAGE_PATH = "/images/sponsorship-page.svg";

/**
 * A visually engaging hero section for the Sponsorship page.
 */
export const SponsorshipHeroSection = () => {
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
          alt="Sponsorship Background"
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
          <span className="font-medium text-white">Sponsorship</span>
        </nav>

        <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
          Partnership <span className="text-primary">Opportunities</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Showcase your brand to a dedicated audience of nephrologists and
          healthcare leaders. Partner with NZ-ISNCON 2026 to gain valuable
          exposure and connect with key decision-makers.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/contact">Become a Sponsor</Link>
          </Button>
          {/* ✨ 2. Button styled for dark background */}
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 bg-transparent hover:bg-white/10"
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
