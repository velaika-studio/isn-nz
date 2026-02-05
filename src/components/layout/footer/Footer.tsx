"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Heart,
  ExternalLink,
} from "lucide-react";
import { ConferenceDetails, OrganizerContactData } from "@/lib/constants/contact";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 20, opacity: 0 },
};

const staggeredVariants = {
  visible: { transition: { staggerChildren: 0.08 } },
  hidden: {},
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Registration", href: "/registration" },
  { label: "Scientific Programme", href: "/scientific-program" },
  { label: "Committee", href: "/committee" },
  { label: "Venue", href: "/venue" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Abstract Submission", href: "/abstract" },
  { label: "Download Brochure", href: "/brochure" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Tourist Attractions", href: "/venue#tourist-attractions" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-linear-to-br from-muted/30 via-background to-muted/20">
      {/* Top Border with Gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 left-0 size-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="size-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggeredVariants}
          className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 lg:py-20"
        >
          {/* Brand Section */}
          <motion.div variants={fadeUpVariant} className="space-y-7 lg:col-span-1">
            {/* Main Conference Logos - NZ-ISNCON and ISN */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* NZ-ISNCON Logo */}
                <Link href="/" className="group">
                  <div className="relative size-20 overflow-hidden rounded-2xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent p-3 ring-2 ring-primary/10 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:ring-primary/30 group-hover:shadow-primary/20">
                    <Image
                      src={ConferenceDetails.logoSrc}
                      alt={ConferenceDetails.logoAlt}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                </Link>

                {/* ISN Logo */}
                <div className="group cursor-pointer">
                  <div className="relative size-20 overflow-hidden rounded-2xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent p-3 ring-2 ring-primary/10 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:ring-primary/30 group-hover:shadow-primary/20">
                    <Image
                      src="/isn-logo.png"
                      alt="ISN Logo"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                </div>
              </div>

              {/* Title and Location */}
              <div>
                <h3 className="font-serif text-xl font-bold leading-tight text-foreground">
                  {ConferenceDetails.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-muted-foreground">Dehradun, India</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground/90">
              {ConferenceDetails.eventSubtitle}
            </p>

            {/* Conference Dates - Highlighted */}
            <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-br from-primary/8 via-primary/4 to-transparent p-4 shadow-lg shadow-primary/5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-center gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Calendar className="size-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Conference Dates
                  </p>
                  <p className="mt-0.5 text-base font-bold text-foreground">
                    {ConferenceDetails.eventDetails.dates}
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Logo - DNA Only */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                In Association With
              </p>
              <div className="group/logo relative size-12 overflow-hidden rounded-xl border border-border/50 bg-background p-2 shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <Image src="/dna-logo.png" alt="DNA Logo" fill className="object-contain" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUpVariant} className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1.5 hover:text-foreground"
                  >
                    <ArrowRight className="size-4 text-primary opacity-0 transition-all duration-200 group-hover:opacity-100" />
                    <span className="transition-all duration-200 group-hover:font-semibold">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUpVariant} className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1.5 hover:text-foreground"
                  >
                    <ArrowRight className="size-4 text-primary opacity-0 transition-all duration-200 group-hover:opacity-100" />
                    <span className="transition-all duration-200 group-hover:font-semibold">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={fadeUpVariant} className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Get in Touch
            </h4>
            
            <div className="space-y-2.5">
              <a
                href={ConferenceDetails.contact.emailHref}
                className="group flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-primary/20 hover:bg-primary/5"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                  <Mail className="size-4" />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="mt-0.5 truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {ConferenceDetails.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={ConferenceDetails.contact.phoneHref}
                className="group flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-primary/20 hover:bg-primary/5"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                  <Phone className="size-4" />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Phone</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {ConferenceDetails.contact.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-xl border border-transparent p-2.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm">
                  <MapPin className="size-4" />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-foreground">
                    {ConferenceDetails.address.line1}, {ConferenceDetails.address.line2}
                    <br />
                    {ConferenceDetails.address.line3}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Event Partner Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="border-t border-border/30 py-10"
        >
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Event Partner
              </p>
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <div className="relative h-16 w-32 overflow-hidden rounded-xl border border-border/50 bg-background/80 p-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:shadow-lg">
                  <Image
                    src={OrganizerContactData.eventPartner.logoSrc}
                    alt={OrganizerContactData.eventPartner.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-base font-bold text-foreground">
                    {OrganizerContactData.eventPartner.name}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground md:justify-start">
                    <a
                      href={OrganizerContactData.conferenceManager.contact.emailHref}
                      className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                    >
                      <Mail className="size-3.5 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{OrganizerContactData.conferenceManager.contact.email}</span>
                    </a>
                    <span className="text-border">•</span>
                    <a
                      href={OrganizerContactData.conferenceManager.contact.phoneHref}
                      className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                    >
                      <Phone className="size-3.5 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{OrganizerContactData.conferenceManager.contact.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/10 bg-primary/5 px-6 py-4 text-center md:text-right">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Organized under the aegis of
              </p>
              <p className="text-sm font-bold text-foreground">Indian Society of Nephrology</p>
              <p className="text-sm font-medium text-foreground/80">North Zone</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="border-t border-border/30 py-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {ConferenceDetails.title}. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Designed & Developed with</span>
              <Heart className="size-4 fill-red-500 text-red-500 animate-pulse" />
              <span className="text-muted-foreground">by</span>
              <Link
                href="https://abhisheksan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-semibold text-foreground transition-colors hover:text-primary"
              >
                Abhishek Sharma
                <ExternalLink className="size-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
              </Link>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
