"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ExternalLink,
  MapPin,
  Plane,
  Train,
  Car,
  Phone,
  Globe,
  MapPinIcon,
} from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CONFERENCE_DATE,
  CONFERENCE_END_DATE,
} from "@/lib/constants/conferenceDetails";
import {
  tabsContent,
  venueDetails,
  venueImages,
  nearbyHotels
} from "@/lib/constants/venueDetails";
import { Hotel, HotelCategory } from "@/types/information";

// --- Main Section Component ---

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
      className="relative w-full overflow-hidden py-20 md:py-28"
      id="venue"
      aria-labelledby="venue-heading"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VenueHeader />
        <VenueContent />
      </div>
    </motion.section>
  );
};

// --- Sub-components ---

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const VenueHeader = () => (
  <motion.div variants={itemVariants} className="mb-12 text-center">
    <h2
      id="venue-heading"
      className="text-4xl font-bold tracking-tight sm:text-5xl"
    >
      Conference Venue
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
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
      <Card className="group relative overflow-hidden rounded-3xl border-border/40 bg-card/30 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-primary/5">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative min-h-[350px] overflow-hidden lg:h-auto">
            <Image
              src={venueImages.main}
              alt="Hotel Hyatt Centric, Dehradun"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent lg:bg-linear-to-r" />

            {/* Badge */}
            <div className="absolute top-6 left-6">
              <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md border-none px-4 py-1.5 font-medium">
                Official Venue
              </Badge>
            </div>

            {/* Title Overlay for Mobile/Image Sidebar */}
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                {venueDetails.name}
              </h3>
              <p className="mt-2 text-lg font-medium text-white/90">
                {venueDetails.tagline}
              </p>
            </div>
          </div>

          {/* Info Section */}
          <CardContent className="relative flex flex-col justify-center bg-linear-to-br from-card/80 via-card/50 to-transparent p-8 lg:p-12">
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Details List */}
                <div className="flex items-start gap-5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary shadow-inner">
                    <MapPin className="size-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary/80">Location</h4>
                    <p className="text-base leading-relaxed text-foreground">
                      {venueDetails.address.line1}, {venueDetails.address.line2}
                      <br />
                      <span className="text-muted-foreground">{venueDetails.address.line3}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary shadow-inner">
                    <Calendar className="size-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary/80">Conference Dates</h4>
                    <p className="text-base font-medium text-foreground">{formatConferenceDates()}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button asChild size="lg" className="h-12 flex-1 gap-2 rounded-xl shadow-lg shadow-primary/20 lg:flex-none lg:px-8">
                  <Link
                    href={venueDetails.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Hotel
                    <ExternalLink className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 flex-1 hover:text-white rounded-xl backdrop-blur-sm lg:flex-none lg:px-8">
                  <Link
                    href="#tourist-attractions"
                  >
                    View Surroundings
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
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
                {tabsContent.info.mainContent.map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
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
                {tabsContent.hotels.description}
              </p>
            </div>

            {/* Luxury Hotels */}
            <HotelCategorySection category={nearbyHotels.luxury} />

            {/* Mid-Range Hotels */}
            <HotelCategorySection category={nearbyHotels.midRange} />

            {/* Budget Hotels */}
            <HotelCategorySection category={nearbyHotels.budget} />
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
                  Jolly Grant Airport (DED) is approximately 28 km from the venue.
                  Travel time is 45-60 minutes by taxi. Pre-paid taxis are available
                  at the airport.
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
                  Dehradun Railway Station is 6 km from the venue. Regular trains
                  connect Dehradun to Delhi, Mumbai, and other major cities.
                  Auto-rickshaws and taxis are readily available.
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
                  Dehradun is well-connected by road via the Delhi-Dehradun Expressway.
                  The drive from Delhi takes approximately 4-5 hours. The venue is
                  located on Rajpur Road, easily accessible from the city center.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="mt-6 overflow-hidden rounded-xl border">
            <AspectRatio ratio={21 / 9}>
              <iframe
                src={venueDetails.mapEmbedUrl}
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

// --- Hotel Components ---

const HotelCategorySection = ({ category }: { category: HotelCategory }) => {
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
          <p className="col-span-full text-center text-muted-foreground">No hotels available in this category.</p>
        )}
      </div>
    </div>
  );
};

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className="group h-full transition-transform duration-300 hover:-translate-y-1">
      <Card className="relative h-full overflow-hidden border-border/40 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-black/70 text-white backdrop-blur-sm border-none px-3 py-1.5 text-sm font-semibold">
              {hotel.priceRange.currency} {hotel.priceRange.min.toLocaleString()} - {hotel.priceRange.currency}{hotel.priceRange.max.toLocaleString()}
            </Badge>
          </div>

          {/* Hotel Name Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="font-serif text-xl font-bold leading-tight text-white">
              {hotel.name}
            </h4>
          </div>
        </div>

        <CardContent className="space-y-4 p-6">
          {/* Distance */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="size-4 text-primary" />
            <span>{hotel.distance}</span>
          </div>

          {/* Features */}
          {hotel.features && hotel.features.length > 0 && (
            <div className="space-y-2">
              {hotel.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-base">{feature.icon}</span>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-2">
            {hotel.contact.phone && (
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2"
                asChild
              >
                <a href={`tel:${hotel.contact.phone}`}>
                  <Phone className="size-4" />
                  Call Hotel
                </a>
              </Button>
            )}
            {hotel.contact.website && (
              <Button
                variant="default"
                size="sm"
                className="w-full gap-2"
                asChild
              >
                <Link
                  href={hotel.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="size-4" />
                  Website
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VenueSection;
