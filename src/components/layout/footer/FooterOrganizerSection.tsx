import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ORGANIZER_CONTACT_DATA } from "@/lib/constants/contact-data";
import { ContactItem, FooterSectionHeader } from "./FooterShared";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 20, opacity: 0 },
};

const FooterOrganizerCard = ({
  logoSrc,
  logoAlt,
  label,
  name,
  institution,
}: {
  logoSrc: string;
  logoAlt: string;
  label: string;
  name: string;
  institution?: string;
}) => (
  <div className="flex items-start gap-4 group">
    <div className="relative h-24 w-24 flex-shrink-0 rounded-2xl flex items-center justify-center p-1 overflow-hidden border border-border/50 bg-card/50 shadow-lg">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={48}
        height={48}
        className="object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="flex-1">
      <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
        {label}
      </p>
      <p className="font-bold text-foreground text-base mt-0.5 leading-tight">
        {name}
      </p>
      {institution && (
        <p className="text-sm text-muted-foreground mt-1">{institution}</p>
      )}
    </div>
  </div>
);

export const FooterOrganizerSection = () => (
  <motion.div variants={fadeUpVariant} className="space-y-6">
    <FooterSectionHeader icon={Globe} title={ORGANIZER_CONTACT_DATA.title} />

    <div className="space-y-4">
      <FooterOrganizerCard {...ORGANIZER_CONTACT_DATA.organizer} />
      <div className="h-px bg-border/30" />
      <FooterOrganizerCard {...ORGANIZER_CONTACT_DATA.eventPartner} />
    </div>

    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-bold">
        {ORGANIZER_CONTACT_DATA.conferenceManager.title}
      </p>
      <div className="space-y-3">
        <ContactItem icon={Phone}>
          <a
            href={ORGANIZER_CONTACT_DATA.conferenceManager.contact.phoneHref}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {ORGANIZER_CONTACT_DATA.conferenceManager.contact.phone}
          </a>
        </ContactItem>
        <ContactItem icon={Mail}>
          <a
            href={ORGANIZER_CONTACT_DATA.conferenceManager.contact.emailHref}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {ORGANIZER_CONTACT_DATA.conferenceManager.contact.email}
          </a>
        </ContactItem>
      </div>
    </div>

    <Button className="w-full group font-semibold" asChild>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 group"
      >
        <span>Contact Organizer</span>
        <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform duration-300 ease-in-out" />
      </Link>
    </Button>
  </motion.div>
);
