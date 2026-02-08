"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Car,
  ExternalLink,
  Globe,
  MapPin,
  MapPinIcon,
  Phone,
  Plane,
  Train,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CONFERENCE_DATE,
  CONFERENCE_END_DATE,
} from "@/lib/constants/conference-details";
import {
  NEARBY_HOTELS,
  VENUE_DETAILS,
  VENUE_IMAGES,
  VENUE_TABS_CONTENT,
} from "@/lib/constants/venue-details";
import type { HotelType, HotelCategoryType } from "@/types/information";

/**
 * Venue section without hotels - simplified design
 */
export const VenueSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="relative w-full overflow-hidden py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-transparent"
      id="venue"
      aria-labelledby="venue-heading"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <VenueHeader />
        <VenueContent />
      </div>
    </motion.section>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const VenueHeader = () => (
  <motion.div variants={itemVariants} className="mb-12 text-center">
    <h2
      id="venue-heading"
      className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
    >
      Conference Venue
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
      Join us at the prestigious Hotel Hyatt Centric in the heart of Dehradun
    </p>
  </motion.div>
);

const VenueContent = () => {
  const formatConferenceDates = () => {
    const startMonth = new Date(CONFERENCE_DATE).toLocaleString("default", {
      month: "long",
    });
    const startDay = new Date(CONFERENCE_DATE).getDate();
    const endDay = new Date(CONFERENCE_END_DATE).getDate();
    const year = new Date(CONFERENCE_DATE).getFullYear();
    return `${startMonth} ${startDay}-${endDay}, ${year}`;
  };

  return (
    <motion.div variants={itemVariants} className="space-y-8">
      {/* Venue Card */}
      <Card className="group py-0 overflow-hidden rounded-3xl border-border/40 bg-card/30 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-primary/5">
        {/* Image Section - Full Width on Mobile */}
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
          <Image
            src={VENUE_IMAGES.main}
            alt="Hotel Hyatt Centric, Dehradun"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <Badge className="border-none bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-sm">
              Official Venue
            </Badge>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {VENUE_DETAILS.name}
            </h3>
            <p className="mt-2 text-base font-medium text-white/90 sm:text-lg">
              {VENUE_DETAILS.tagline}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="space-y-6 p-6 sm:p-8">
          {/* Info Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Location */}
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Location
                </h4>
                <p className="text-sm leading-relaxed text-foreground">
                  {VENUE_DETAILS.address.line1}, {VENUE_DETAILS.address.line2}
                  <br />
                  <span className="text-muted-foreground">
                    {VENUE_DETAILS.address.line3}
                  </span>
                </p>
              </div>
            </div>

            {/* Conference Dates */}
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calendar className="size-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Conference Dates
                </h4>
                <p className="text-sm font-semibold text-foreground">
                  {formatConferenceDates()}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 w-full gap-2 rounded-xl shadow-lg shadow-primary/20 sm:flex-1"
            >
              <Link
                href={VENUE_DETAILS.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="size-4" />
                Explore Hotel
                <ExternalLink className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full gap-2 rounded-xl backdrop-blur-sm hover:bg-primary hover:text-white sm:flex-1"
            >
              <Link href="#tourist-attractions">
                <MapPinIcon className="size-4" />
                View Surroundings
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for About, Hotels and Travel */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-3">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
          <TabsTrigger value="travel">Travel</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="prose prose-sm max-w-none text-muted-foreground">
                {VENUE_TABS_CONTENT.info.mainContent.map((paragraph) => (
                  <p
                    key={paragraph.substring(0, 50)}
                    className="mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hotels" className="mt-6">
          <div className="space-y-12">
            {/* Hotels Description */}
            <div className="text-center">
              <p className="mx-auto max-w-4xl text-base leading-relaxed text-muted-foreground">
                {VENUE_TABS_CONTENT.hotels.description}
              </p>
            </div>

            {/* Luxury Hotels */}
            <HotelCategorySection category={NEARBY_HOTELS.luxury} />

            {/* Mid-Range Hotels */}
            <HotelCategorySection category={NEARBY_HOTELS.midRange} />

            {/* Budget Hotels */}
            <HotelCategorySection category={NEARBY_HOTELS.budget} />
          </div>
        </TabsContent>

        <TabsContent value="travel" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                  <Plane className="size-5 text-primary" />
                  By Air
                </h4>
                <p className="text-sm text-muted-foreground">
                  Jolly Grant Airport (DED) is approximately 28 km from the
                  venue. Travel time is 45-60 minutes by taxi. Pre-paid taxis
                  are available at the airport.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                  <Train className="size-5 text-primary" />
                  By Rail
                </h4>
                <p className="text-sm text-muted-foreground">
                  Dehradun Railway Station is 6 km from the venue. Regular
                  trains connect Dehradun to Delhi, Mumbai, and other major
                  cities. Auto-rickshaws and taxis are readily available.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <h4 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                  <Car className="size-5 text-primary" />
                  By Road
                </h4>
                <p className="text-sm text-muted-foreground">
                  Dehradun is well-connected by road via the Delhi-Dehradun
                  Expressway. The drive from Delhi takes approximately 4-5
                  hours. The venue is located on Rajpur Road, easily accessible
                  from the city center.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="mt-6 overflow-hidden rounded-xl border">
            <AspectRatio ratio={21 / 9}>
              <iframe
                src={VENUE_DETAILS.mapEmbedUrl}
                className="size-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Hyatt Centric Dehradun Location Map"
              />
            </AspectRatio>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

const HotelCategorySection = ({
  category,
}: {
  category: HotelCategoryType;
}) => {
  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div className="text-center">
        <h3 className="font-serif text-3xl font-bold">{category.title}</h3>
        <p className="mt-2 text-muted-foreground">{category.subtitle}</p>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-primary/50 via-primary to-primary/50" />
      </div>

      {/* Hotel Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.hotels && category.hotels.length > 0 ? (
          category.hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No hotels available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

const HotelCard = ({ hotel }: { hotel: HotelType }) => {
  return (
    <Card className="group py-0 flex h-full flex-col overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Image Section - Fixed Height */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content Section - Flex Grow */}
      <CardContent className="flex flex-1 flex-col p-5">
        {/* Header Section - Fixed */}
        <div className="space-y-2">
          <h4 className="line-clamp-2 min-h-14 font-semibold leading-tight text-foreground sm:text-lg">
            {hotel.name}
          </h4>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPinIcon className="size-4 shrink-0 text-primary" />
            <span className="line-clamp-1">{hotel.distance}</span>
          </div>
        </div>

        {/* Features Section - Fixed Height */}
        <div className="mt-4 min-h-16">
          {hotel.features && hotel.features.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {hotel.features.slice(0, 3).map((feature) => (
                <span
                  key={feature.label}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted"
                >
                  <span className="text-sm">{feature.icon}</span>
                  <span className="font-medium">{feature.label}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Spacer to push footer to bottom */}
        <div className="flex-1" />

        {/* Footer Section - Always at Bottom */}
        <div className="mt-4 space-y-3 border-t border-border/50 pt-4">
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-muted-foreground">From</span>
            <span className="text-xl font-bold text-primary">
              {hotel.priceRange.currency}
              {hotel.priceRange.min.toLocaleString()}
            </span>
            <span className="text-sm font-normal text-muted-foreground">
              / night
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {hotel.contact.website && (
              <Button
                variant="default"
                size="sm"
                className="flex-1 gap-2"
                asChild
              >
                <Link
                  href={hotel.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="size-4" />
                  View Details
                </Link>
              </Button>
            )}
            {hotel.contact.phone && (
              <Button
                variant="outline"
                size="sm"
                className="shrink-0 hover:text-white"
                asChild
              >
                <a href={`tel:${hotel.contact.phone}`} aria-label="Call hotel">
                  <Phone className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VenueSection;
