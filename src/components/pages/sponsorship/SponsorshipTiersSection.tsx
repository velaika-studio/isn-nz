"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sponsorshipTiers } from "@/lib/constants/sponsorshipDetails";
import { cn } from "@/lib/utils";

/**
 * Displays the different sponsorship tiers with a visually distinct featured tier.
 */
export const SponsorshipTiersSection = () => {
  return (
    <motion.section
      id="sponsorship-tiers"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full scroll-mt-20 bg-gradient-to-b from-primary/5 via-transparent to-transparent py-16 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Sponsorship Packages
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
            Choose the partnership level that best aligns with your marketing
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {sponsorshipTiers.map((tier) => (
            // ✨ 1. Wrapper for glow effect on the featured card
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl transition-transform duration-300",
                tier.featured && "lg:-translate-y-6",
              )}
            >
              {/* Animated gradient for the glow */}
              <div
                className={cn(
                  "absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/60 via-primary to-amber-400 opacity-0 transition-opacity duration-300",
                  tier.featured && "opacity-100",
                )}
              />
              <Card
                className={cn(
                  "relative flex h-full flex-col border-border/50 bg-card/60 backdrop-blur-sm",
                  tier.featured && "bg-background",
                )}
              >
                {tier.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Star className="mr-1.5 size-3" /> Most Popular
                  </Badge>
                )}
                <CardHeader
                  className={cn(
                    "text-center",
                    tier.featured && "bg-primary/5", // Highlighted header
                  )}
                >
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4 text-4xl font-bold text-primary">
                    {tier.price}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {tier.benefits.map((benefit, index) => (
                      <li
                        key={benefit}
                        // ✨ 3. Cleaner benefit list with borders
                        className={cn(
                          "flex items-start border-b border-border/50 pb-4",
                          index === tier.benefits.length - 1 && "border-b-0",
                        )}
                      >
                        <Check className="mr-2.5 mt-1 size-4 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full hover:text-white"
                    size="lg"
                    variant={tier.featured ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">Select Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
