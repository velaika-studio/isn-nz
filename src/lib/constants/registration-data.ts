import { CalendarClock, Mail, MapPin, Sparkles, Users } from "lucide-react";
import type { DetailType, HighlightType, PricingOptionType } from "@/types/ui";
import { CONFERENCE_DETAILS } from "./contact-data";

// Conference details for NZ-ISNCON 2026
export const REGISTRATION_DETAILS: DetailType[] = [
  {
    icon: CalendarClock,
    title: "Conference Dates",
    content: CONFERENCE_DETAILS.WELCOME_EVENT_DETAILS.dates,
    subtitle: "Three-day comprehensive nephrology conference",
  },
  {
    icon: MapPin,
    title: "Venue",
    content:
      CONFERENCE_DETAILS.address.line2 +
      ", " +
      CONFERENCE_DETAILS.address.line3,
    subtitle: "Hotel Hyatt Centric, Rajpur Road, Dehradun",
  },
  {
    icon: Mail,
    title: "Have Questions?",
    content: CONFERENCE_DETAILS.contact.email,
    subtitle: "Contact our organizing committee for assistance",
  },
];

// Registration fee structure with multiple pricing tiers
export const PRICING_OPTIONS: PricingOptionType[] = [
  {
    category: "Students",
    earlyBird: "₹1,200",
    regular: "₹1,800",
    late: "₹4,200",
    spotRegistration: "₹4,200",
  },
  {
    category: "ISN Members",
    earlyBird: "₹3,000",
    regular: "₹4,200",
    late: "₹4,800",
    spotRegistration: "₹4,800",
    popular: true,
  },
  {
    category: "Non-ISN Members",
    earlyBird: "₹4,800",
    regular: "₹6,500",
    late: "₹8,900",
    spotRegistration: "₹8,900",
  },
  {
    category: "Accompanying Person",
    earlyBird: "₹4,200",
    regular: "₹5,400",
    late: "₹7,100",
    spotRegistration: "₹7,100",
  },
];

// Registration deadline dates
export const EARLY_BIRD_DEADLINE = "15th February 2026";
export const REGULAR_DEADLINE = "15th March 2026";
export const LATE_DEADLINE = "Spot Registration";
export const EARLY_BIRD_END_DATE = new Date("2026-02-15T23:59:59");
export const REGULAR_END_DATE = new Date("2026-03-15T23:59:59");

// Bank account details for registration payments
export const BANK_DETAILS = {
  accountName: "INDIAN SOCIETY OF NEPHROLOGY NORTHERN ZONE",
  bankName: "Bank of Baroda",
  branch: "DELHI-ARMY HOSPITAL BRANCH",
  state: "DELHI",
  accountNumber: "86000100000819",
  ifscCode: "BARB0VJARHO",
  pan: "AABAI0867P",
  gstin: "07AABAI086P1Z9",
};

// Conference organizing committee contact details
export const REGISTRATION_CONTACTS = [
  {
    name: "Organizing Team",
    role: "Secretariat",
    phone: "135-614-1234",
    phoneHref: "tel:+911356141234",
  },
];

// Conference highlights with actual program details
export const REGISTRATION_HIGHLIGHTS: HighlightType[] = [
  {
    icon: Sparkles,
    title: "Expert-Led Sessions & Workshops",
    description:
      "Engage with leading nephrologists and clinical experts through focused sessions on kidney disease management, dialysis innovations, and hypertension updates.",
  },
  {
    icon: Users,
    title: "Diverse Subspecialty Topics",
    description:
      "Explore cutting-edge topics including Diabetic Kidney Disease, Glomerulonephritis, Transplantation Immunology, Critical Care Nephrology, and Pediatric Kidney Health.",
  },
  {
    icon: CalendarClock,
    title: "Three-Day Intensive Program",
    description:
      "April 10-12, 2026 - Comprehensive learning experience featuring interactive workshops, case presentations, and poster reviews covering the latest advances in nephrology.",
  },
];

// Registration form link
export const REGISTRATION_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSfV2MUXXT6GzC9GEzZhGkHC3uaSmFPsX8gclaQTxoYLw78e0w/viewform";
