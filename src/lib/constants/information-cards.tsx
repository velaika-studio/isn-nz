import { Download, FileDown, FileText, UserPlus } from "lucide-react";
import React from "react";
import type { InfoCardPropsType } from "@/types";

export const INFORMATION_CARDS_DATA: InfoCardPropsType[] = [
  {
    title: "Registration Details",
    description:
      "Register now to secure your place at this premier nephrology conference",
    icon: <UserPlus size={24} strokeWidth={1.5} />,
    href: "/registration",
    disabled: false,
  },
  {
    title: "Abstract Submission",
    description:
      "Submit your research on nephrology care and clinical practice for presentation at the conference",
    icon: <FileText size={24} strokeWidth={1.5} />,
    href: "/abstract-guidelines",
    disabled: false,
  },
  {
    title: "Scientific Program",
    description:
      "Explore the comprehensive scientific program with expert sessions, slide seminars, and keynote speakers",
    icon: <FileDown size={24} strokeWidth={1.5} />,
    href: "/scientific-program",
    disabled: false,
  },
  {
    title: "Conference Brochure",
    description: "Download the complete brochure with all event details",
    icon: <Download size={24} strokeWidth={1.5} />,
    href: "/conference-brochure",
  },
];
