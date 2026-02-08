import GoToTopButton from "@/components/shared/GoToTopButton";
import { cn } from "@/lib/utils";
import type { LayoutPropsType } from "@/types/ui";
import { Footer } from "./footer/Footer";
import { NavbarComponent } from "./navbar/Navbar";

/**
 * Provides a consistent page structure with a header, main content area, and Footer.
 * Includes essential accessibility features like a skip-to-content link.
 *
 * @param {LayoutPropsType} props - The properties for the layout component.
 * @returns {JSX.Element} The rendered layout.
 */
const Layout = ({
  className,
  children,
  showNav = true,
  showFooter = true,
}: LayoutPropsType) => {
  return (
    <>
      <div
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans",
          className,
        )}
      >
        {showNav && <NavbarComponent />}

        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>

        {showFooter && <Footer />}
      </div>

      <GoToTopButton />
    </>
  );
};

export default Layout;
