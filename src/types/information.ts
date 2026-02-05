import type { LucideIcon } from "lucide-react";

export interface SubmissionCategory {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface FormatRequirement {
  element: string;
  requirement: string;
  example: React.ReactNode;
}

export interface Guideline {
  icon: LucideIcon;
  text: string;
  colorClassName: string;
}

export interface ResourceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkText: string;
  isExternal?: boolean;
}

export interface HotelFeature {
  icon: string;
  label: string;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  distance: string;
  distanceFromVenue: number;
  features: HotelFeature[];
  contact: {
    phone?: string;
    website?: string;
  };
  rating?: number;
  location?: string;
}

export interface HotelCategory {
  title: string;
  subtitle: string;
  hotels: Hotel[];
}
