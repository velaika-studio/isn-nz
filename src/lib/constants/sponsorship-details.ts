import { Building, Megaphone, Star, Tv, Users } from "lucide-react";
import type {
  BenefitType,
  SponsorshipPackageType,
  SponsorshipTierType,
} from "@/types/ui";

/**
 * Defines the different sponsorship tiers available.
 */
export const SPONSORSHIP_TIERS: SponsorshipTierType[] = [
  {
    name: "Platinum Stall Sponsor",
    price: "₹12 Lakhs",
    description: "Maximum visibility and prime exhibition space.",
    benefits: [
      "(4X2) Exhibition Stall at Prime Location",
      "7 Complimentary Exhibitor Registrations (Lunch & Dinner Coupons Valid for all days)",
      "Special Mention at Dinner and Lunch Venues",
      "Special Mention on Screen During Session Break",
    ],
    featured: true,
  },
  {
    name: "Gold Stall Sponsor",
    price: "₹10 Lakhs",
    description: "Premium exhibition presence and branding.",
    benefits: [
      "(4X2) Exhibition Stall at Prime Location",
      "5 Complimentary Exhibitor Registrations (Lunch & Dinner Coupons Valid for all days)",
      "Special Mention on Screen During Session Break",
      "Branding Opportunity",
    ],
  },
  {
    name: "Silver Stall Sponsor",
    price: "₹7.5 Lakhs",
    description: "Enhanced visibility and exhibition space.",
    benefits: [
      "Exhibition Stall (3X2 M) at Prime Location",
      "3 Complimentary Exhibitor Registrations (Lunch & Dinner Coupons Valid for all days)",
      "Branding Opportunity",
    ],
  },
  {
    name: "Exhibitor Stall",
    price: "₹3 Lakhs",
    description: "Dedicated space to showcase your products.",
    benefits: [
      "1 Complimentary Exhibitor Registrations (Lunch & Dinner Coupons Valid for all days)",
      "Exhibition Stall (2X2 M)",
      "Branding Opportunity",
    ],
  },
  {
    name: "Introductory Stall",
    price: "₹2 Lakh",
    description: "Essential exhibition presence for new partners.",
    benefits: ["Exhibition Stall (2X2 M)", "Branding Opportunity"],
  },
];

/**
 * A list of all possible benefits a sponsor can receive.
 */
export const ALL_BENEFITS: BenefitType[] = [
  {
    name: "Exhibition Stall",
    description: "Dedicated exhibition space at the conference venue.",
    icon: Building,
  },
  {
    name: "Complimentary Registrations",
    description: "Free registrations for your team members.",
    icon: Users,
  },
  {
    name: "Special Mentions",
    description: "Acknowledgements at dinner/lunch and on screens.",
    icon: Megaphone,
  },
  {
    name: "Branding Opportunity",
    description: "Visibility and branding throughout the event.",
    icon: Star,
  },
];

/**
 * Defines the specific benefits for each package tier for the comparison table.
 */
export const SPONSORSHIP_PACKAGES: SponsorshipPackageType[] = [
  {
    name: "Platinum",
    price: "₹12 Lakhs",
    benefits: {
      "Exhibition Stall": "4X2 Prime",
      "Complimentary Registrations": "7",
      "Special Mentions": "Yes",
      "Branding Opportunity": "Yes",
    },
  },
  {
    name: "Gold",
    price: "₹10 Lakhs",
    benefits: {
      "Exhibition Stall": "4X2 Prime",
      "Complimentary Registrations": "5",
      "Special Mentions": "Yes",
      "Branding Opportunity": "Yes",
    },
  },
  {
    name: "Silver",
    price: "₹7.5 Lakhs",
    benefits: {
      "Exhibition Stall": "3X2 Prime",
      "Complimentary Registrations": "3",
      "Special Mentions": "No",
      "Branding Opportunity": "Yes",
    },
  },
  {
    name: "Exhibitor",
    price: "₹3 Lakhs",
    benefits: {
      "Exhibition Stall": "2X2",
      "Complimentary Registrations": "1",
      "Special Mentions": "No",
      "Branding Opportunity": "Yes",
    },
  },
  {
    name: "Introductory",
    price: "₹2 Lakh",
    benefits: {
      "Exhibition Stall": "2X2",
      "Complimentary Registrations": "0",
      "Special Mentions": "No",
      "Branding Opportunity": "Yes",
    },
  },
];
