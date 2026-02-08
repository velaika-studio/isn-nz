import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";
import type { ContactInfoLinkPropsType } from "@/types/ui";

const contactLinks: ContactInfoLinkPropsType[] = [
  {
    icon: Phone,
    href: CONFERENCE_DETAILS.contact.phoneHref,
    text: CONFERENCE_DETAILS.contact.phone,
  },
  {
    icon: Mail,
    href: CONFERENCE_DETAILS.contact.emailHref,
    text: CONFERENCE_DETAILS.contact.email,
  },
];

/**
 * Redesigned top bar with modern styling
 */
export const ContactInfoBar = () => {
  return (
    <div className="hidden lg:block bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border-b border-border/30">
      <div className="flex items-center justify-between py-2 px-8">
        <div className="flex items-center gap-8">
          {/* Contact links with pill design */}
          {contactLinks.map((item) => (
            <InfoLink key={item.href} {...item} />
          ))}

          {/* Location info */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex size-6 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="size-3 text-primary" />
            </div>
            <span className="font-medium">
              {CONFERENCE_DETAILS.address.line1},{" "}
              {CONFERENCE_DETAILS.address.line2}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Date badge */}
          <div className="flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            <span>📅</span>
            <span>10-12 April 2026</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

/**
 * Styled link with icon
 */
const InfoLink = ({ icon: Icon, href, text }: ContactInfoLinkPropsType) => {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="size-3 text-primary" />
      </div>
      <span className="font-medium">{text}</span>
    </Link>
  );
};
