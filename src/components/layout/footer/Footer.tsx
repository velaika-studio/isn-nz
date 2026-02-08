"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  CONFERENCE_DETAILS,
  ORGANIZER_CONTACT_DATA,
} from "@/lib/constants/contact-data";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  hidden: { y: 30, opacity: 0 },
};

const staggeredVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
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

const WELCOME_RESOURCE_LINKS = [
  { label: "Abstract Submission", href: "/abstract" },
  { label: "Download Brochure", href: "/brochure" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Tourist Attractions", href: "/venue#tourist-attractions" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/3 right-0 size-[500px] rounded-3xl bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/3 left-0 size-[500px] rounded-3xl bg-primary/5 blur-3xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
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
          <motion.div
            variants={fadeUpVariant}
            className="space-y-6 lg:col-span-1"
          >
            {/* Main Conference Logos */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* NZ-ISNCON Logo */}
                <Link href="/" className="group">
                  <div className="relative size-20 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-3 ring-2 ring-primary/10 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:ring-primary/30 group-hover:shadow-primary/20">
                    <Image
                      src={CONFERENCE_DETAILS.logoSrc}
                      alt={CONFERENCE_DETAILS.logoAlt}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                </Link>

                {/* ISN Logo */}
                <div className="group cursor-pointer">
                  <div className="relative size-20 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-3 ring-2 ring-primary/10 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:ring-primary/30 group-hover:shadow-primary/20">
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
                  {CONFERENCE_DETAILS.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                  Dehradun, Uttarakhand, India
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {CONFERENCE_DETAILS.eventSubtitle}
            </p>

            {/* Conference Dates Card - Enhanced */}
            <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                  <Calendar className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Conference Dates
                  </p>
                  <p className="mt-1 text-lg font-bold text-foreground">
                    {CONFERENCE_DETAILS.WELCOME_EVENT_DETAILS.dates}
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Logo - DNA */}
            <div className="pt-2">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                In Association With
              </p>
              <div className="group relative inline-block">
                <div className="absolute inset-0 rounded-xl bg-primary/10 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative size-14 overflow-hidden rounded-xl border border-border/50 bg-background p-2.5 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-lg">
                  <Image
                    src="/dna-logo.png"
                    alt="DNA Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUpVariant} className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1.5 hover:text-foreground"
                  >
                    <div className="flex size-5 items-center justify-center">
                      <ArrowRight className="size-4 text-primary opacity-0 transition-all duration-200 group-hover:opacity-100" />
                    </div>
                    <span className="transition-all duration-200 group-hover:font-semibold">
                      {link.label}
                    </span>
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
            <ul className="space-y-3">
              {WELCOME_RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1.5 hover:text-foreground"
                  >
                    <div className="flex size-5 items-center justify-center">
                      <ArrowRight className="size-4 text-primary opacity-0 transition-all duration-200 group-hover:opacity-100" />
                    </div>
                    <span className="transition-all duration-200 group-hover:font-semibold">
                      {link.label}
                    </span>
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

            <div className="space-y-3">
              {/* Email */}
              <a
                href={CONFERENCE_DETAILS.contact.emailHref}
                className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-primary/20 hover:bg-primary/5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                  <Mail className="size-5" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {CONFERENCE_DETAILS.contact.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={CONFERENCE_DETAILS.contact.phoneHref}
                className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-primary/20 hover:bg-primary/5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm transition-all duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                  <Phone className="size-5" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {CONFERENCE_DETAILS.contact.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 rounded-xl border border-border/30 p-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm">
                  <MapPin className="size-5" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {CONFERENCE_DETAILS.address.line1},{" "}
                    {CONFERENCE_DETAILS.address.line2}
                    <br />
                    {CONFERENCE_DETAILS.address.line3}
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
          className="border-t border-border/50 py-10"
        >
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Event Partner
              </p>
              <div className="flex flex-col items-center gap-6 md:flex-row">
                {/* Event Partner Logo */}
                <div className="group relative">
                  <div className="absolute inset-0 rounded-xl bg-primary/10 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative h-16 w-36 overflow-hidden rounded-xl border border-border/50 bg-background/80 p-3 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-lg">
                    <Image
                      src={ORGANIZER_CONTACT_DATA.eventPartner.logoSrc}
                      alt={ORGANIZER_CONTACT_DATA.eventPartner.logoAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Event Partner Details */}
                <div className="space-y-2">
                  <p className="text-base font-bold text-foreground">
                    {ORGANIZER_CONTACT_DATA.eventPartner.name}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground md:justify-start">
                    <a
                      href={
                        ORGANIZER_CONTACT_DATA.conferenceManager.contact
                          .emailHref
                      }
                      className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                    >
                      <Mail className="size-3.5 transition-transform group-hover:scale-110" />
                      <span className="font-medium">
                        {ORGANIZER_CONTACT_DATA.conferenceManager.contact.email}
                      </span>
                    </a>
                    <span className="text-border">•</span>
                    <a
                      href={
                        ORGANIZER_CONTACT_DATA.conferenceManager.contact
                          .phoneHref
                      }
                      className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                    >
                      <Phone className="size-3.5 transition-transform group-hover:scale-110" />
                      <span className="font-medium">
                        {ORGANIZER_CONTACT_DATA.conferenceManager.contact.phone}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Organized By Badge */}
            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-6 py-4 text-center shadow-md md:text-right">
              <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Organized under the aegis of
              </p>
              <p className="text-base font-bold text-foreground">
                Indian Society of Nephrology
              </p>
              <p className="text-sm font-semibold text-primary">North Zone</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="border-t border-border/50 py-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {CONFERENCE_DETAILS.title}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
