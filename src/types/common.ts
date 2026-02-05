/**
 * Navigation Types
 */
export interface NavItemType {
  href: string;
  label: string;
  featured?: boolean;
  children?: {
    href: string;
    label: string;
    badge?: string;
  }[];
}

export interface MobileNavAccordionPropsType {
  items: NavItemType[];
}

/**
 * Time Types
 */
export interface TimeRemainingType {
  days: number;
  hours: number;
  minutes: number;
}

/**
 * Carousel Types
 */
export interface CarouselSlideType {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  date?: string;
  venue?: string;
  description?: string;
}

export interface CarouselControlsPropsType {
  currentIndex: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  isAnimating: boolean;
}

export interface SlidePropsType {
  slide: CarouselSlideType;
  index: number;
  currentIndex: number;
  direction: number;
  isVisible: boolean;
  totalSlides: number;
}

/**
 * Organizer Types
 */
export interface OrganizerPropsType {
  name: string;
  role: string;
  institution: string;
  image: string;
  className?: string;
}

/**
 * Info Card Types
 */
export interface InfoCardPropsType {
  title: string;
  description?: string;
  disabled?: boolean;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

export interface HighlightCardPropsType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Tourist Attraction Types
 */
export interface TouristAttractionType {
  id: number;
  name: string;
  distance: string;
  image: string;
  description: string;
  fullDescription?: string;
}

/**
 * Surgical Feature Types
 */
import type { ComponentType, SVGProps } from "react";

export interface SurgicalFeaturePropsType {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
