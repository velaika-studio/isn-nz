"use client";

import { useEffect, useState } from "react";
import { MAIN_NAV_ITEMS } from "@/lib/constants/navigation-data";
import { cn } from "@/lib/utils";
import { DesktopNavigation } from "./DesktopNavbar";
import { MobileNavigation } from "./MobileNavbar";
import { ContactInfoBar } from "./NavbarContactInfoBar";
import AnnouncementBanner from "./NavbarCountdownTimer";
import { NavbarLogo } from "./NavbarLogo";

/**
 * The main navigation header for the site.
 * Features a "glassmorphism" effect that appears and intensifies on scroll.
 * It is composed of an announcement banner, contact info bar, and the primary navigation.
 */
export const NavbarComponent = (): React.JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBanner />
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300",

          "supports-[backdrop-filter]:bg-background/60",

          isScrolled
            ? "border-border/30 bg-background/80 shadow-lg"
            : // At the top, it's transparent to blend with the hero section.
            "border-transparent bg-transparent shadow-none",
        )}
      >
        <ContactInfoBar />
        <div className="flex items-center justify-between px-5">
          <NavbarLogo />
          <DesktopNavigation items={MAIN_NAV_ITEMS} />
          <MobileNavigation items={MAIN_NAV_ITEMS} />
        </div>
      </header>
    </>
  );
};
