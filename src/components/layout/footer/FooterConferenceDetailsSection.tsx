import { motion } from "framer-motion";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";
import { ContactItem, FooterSectionHeader } from "./FooterShared";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 20, opacity: 0 },
};

export const FooterCONFERENCE_DETAILSSection = () => (
  <motion.div variants={fadeUpVariant} className="space-y-6">
    <FooterSectionHeader icon={MapPin} title={CONFERENCE_DETAILS.title} />

    <div className="flex items-center group">
      <div className="relative h-16 w-16 flex-shrink-0 rounded-2xl flex items-center justify-center p-1 overflow-hidden border border-border/50 bg-card/50 shadow-lg">
        <Image
          src={CONFERENCE_DETAILS.logoSrc}
          alt={CONFERENCE_DETAILS.logoAlt}
          width={48}
          height={48}
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="ml-4">
        <h4 className="font-bold text-foreground">
          {CONFERENCE_DETAILS.eventName}
        </h4>
        <p className="text-sm text-muted-foreground">
          {CONFERENCE_DETAILS.eventSubtitle}
        </p>
      </div>
    </div>

    <div className="space-y-4">
      <ContactItem icon={Calendar}>
        <div className="text-sm">
          <div className="font-medium text-foreground">
            {CONFERENCE_DETAILS.WELCOME_EVENT_DETAILS.dates}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1.5" />
            {CONFERENCE_DETAILS.WELCOME_EVENT_DETAILS.timing}
          </div>
        </div>
      </ContactItem>
      <ContactItem icon={Phone}>
        <a
          href={CONFERENCE_DETAILS.contact.phoneHref}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {CONFERENCE_DETAILS.contact.phone}
        </a>
      </ContactItem>
      <ContactItem icon={Mail}>
        <a
          href={CONFERENCE_DETAILS.contact.emailHref}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {CONFERENCE_DETAILS.contact.email}
        </a>
      </ContactItem>
    </div>
  </motion.div>
);
