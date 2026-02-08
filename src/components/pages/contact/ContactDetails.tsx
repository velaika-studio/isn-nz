"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CONFERENCE_DETAILS,
  ORGANIZER_CONTACT_DATA,
} from "@/lib/constants/contact-data";
import { VENUE_DETAILS } from "@/lib/constants/venue-details";

/**
 * Displays detailed contact information with a redesigned, integrated UI.
 */
export const ContactDetails = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-b from-background via-primary/5 to-background py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <Tabs defaultValue="secretariat" className="w-full">
          <TabsList className="mx-auto grid h-auto max-w-lg grid-cols-2">
            <TabsTrigger value="secretariat">Conference Venue</TabsTrigger>
            <TabsTrigger value="organizers">Organizing Team</TabsTrigger>
          </TabsList>

          {/* ✨ 1. Redesigned Secretariat Tab */}
          <TabsContent value="secretariat" className="mt-10">
            <Card className="overflow-hidden py-0 border-border/50 bg-card/60 backdrop-blur-sm">
              <div className="relative h-64 w-full md:h-96">
                <iframe
                  src={VENUE_DETAILS.mapEmbedUrl}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Conference Location"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <ContactInfoItem icon={MapPin} title="Address">
                    <address className="not-italic leading-relaxed">
                      {CONFERENCE_DETAILS.address.line1},{" "}
                      {CONFERENCE_DETAILS.address.line2},{" "}
                      {CONFERENCE_DETAILS.address.line3},{" "}
                      {CONFERENCE_DETAILS.address.line4}
                    </address>
                    <Button
                      variant="link"
                      size="sm"
                      asChild
                      className="-ml-3 mt-1 h-auto p-0"
                    >
                      <a
                        href={VENUE_DETAILS.mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions{" "}
                        <ExternalLink className="ml-1.5 size-3.5" />
                      </a>
                    </Button>
                  </ContactInfoItem>
                  <ContactInfoItem icon={Mail} title="Email">
                    <a
                      href={CONFERENCE_DETAILS.contact.emailHref}
                      className="hover:underline"
                    >
                      {CONFERENCE_DETAILS.contact.email}
                    </a>
                  </ContactInfoItem>
                  <ContactInfoItem icon={Phone} title="Phone">
                    <a
                      href={CONFERENCE_DETAILS.contact.phoneHref}
                      className="hover:underline"
                    >
                      {CONFERENCE_DETAILS.contact.phone}
                    </a>
                  </ContactInfoItem>
                  <ContactInfoItem icon={Clock} title="Office Hours">
                    <p>Monday - Friday, 9:00 AM to 5:00 PM (IST)</p>
                  </ContactInfoItem>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ✨ 2. Redesigned Organizers Tab */}
          <TabsContent value="organizers" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <OrganizationCard
                title="Organized By"
                data={ORGANIZER_CONTACT_DATA.organizer}
              />
              <OrganizationCard
                title="Event Partner"
                data={ORGANIZER_CONTACT_DATA.eventPartner}
              />
              <ManagerCard
                title={ORGANIZER_CONTACT_DATA.conferenceManager.title}
                data={ORGANIZER_CONTACT_DATA.conferenceManager.contact}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
};

const ContactInfoItem = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <div className="flex items-center gap-4">
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="size-5 text-primary" />
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <div className="pl-14 pt-1 text-sm text-muted-foreground">{children}</div>
  </div>
);

const OrganizationCard = ({
  title,
  data,
}: {
  title: string;
  data: { logoSrc: string; logoAlt: string; name: string };
}) => (
  <Card className="h-full border-border/50 bg-card/60 backdrop-blur-sm">
    <CardContent className="flex h-full flex-col items-center justify-between p-6 text-center">
      <div className="text-sm font-semibold text-muted-foreground">{title}</div>
      <div className="my-6">
        <Image
          src={data.logoSrc}
          alt={data.logoAlt}
          width={150}
          height={150}
          className="h-24 w-auto object-contain"
        />
      </div>
      <div className="font-bold text-foreground">{data.name}</div>
    </CardContent>
  </Card>
);

const ManagerCard = ({
  title,
  data,
}: {
  title: string;
  data: { phone: string; phoneHref: string; email: string; emailHref: string };
}) => (
  <Card className="h-full border-border/50 bg-card/60 backdrop-blur-sm">
    <CardContent className="flex h-full flex-col items-center justify-between p-6 text-center">
      <div className="text-sm font-semibold text-muted-foreground">{title}</div>
      <div className="my-6 flex h-20 w-20 items-center justify-center rounded-xl bg-primary/10">
        <Phone className="size-10 text-primary" />
      </div>
      <div className="space-y-1">
        <a
          href={data.phoneHref}
          className="block text-sm font-medium hover:underline"
        >
          {data.phone}
        </a>
        <a
          href={data.emailHref}
          className="block break-all text-sm font-medium hover:underline"
        >
          {data.email}
        </a>
      </div>
    </CardContent>
  </Card>
);
