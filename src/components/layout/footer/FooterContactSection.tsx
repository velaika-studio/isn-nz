import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";
import { CONFERENCE_DETAILS } from "@/lib/constants/contact-data";
import { ContactItem, FooterSectionHeader } from "./FooterShared";

const fadeUpVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: 20, opacity: 0 },
};

export const FooterContactSection = () => (
  <motion.div variants={fadeUpVariant} className="space-y-5">
    <FooterSectionHeader icon={User} title="Contact Us" />
    <div className="space-y-5">
      <ContactItem icon={Phone}>
        <a
          href={CONFERENCE_DETAILS.contact.phoneHref}
          className="hover:text-primary transition-colors"
        >
          {CONFERENCE_DETAILS.contact.phone}
        </a>
      </ContactItem>
      <ContactItem icon={Mail}>
        <a
          href={CONFERENCE_DETAILS.contact.emailHref}
          className="hover:text-primary transition-colors break-words"
        >
          {CONFERENCE_DETAILS.contact.email}
        </a>
      </ContactItem>
    </div>
  </motion.div>
);
