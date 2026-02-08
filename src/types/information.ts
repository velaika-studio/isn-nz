import type { LucideIcon } from "lucide-react";

export interface SubmissionCategoryType {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface FormatRequirementType {
  element: string;
  requirement: string;
  example: React.ReactNode;
}

export interface GuidelineType {
  icon: LucideIcon;
  text: string;
  colorClassName: string;
}

export interface ResourceItemType {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkText: string;
  isExternal?: boolean;
}

export interface HotelFeatureType {
  icon: string;
  label: string;
}

export interface HotelType {
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
  features: HotelFeatureType[];
  contact: {
    phone?: string;
    website?: string;
  };
  rating?: number;
  location?: string;
}

export interface HotelCategoryType {
  title: string;
  subtitle: string;
  hotels: HotelType[];
}
