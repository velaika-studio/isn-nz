"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { RESOURCE_ITEMS } from "@/lib/constants/brochure-data";
import type { ResourceItemType } from "@/types/information";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * A section for important conference resources and links.
 */
export const BrochureResourcesSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="w-full py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {RESOURCE_ITEMS.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/**
 * ✨ A redesigned, fully-clickable resource card with an animated arrow on hover.
 */
const ResourceCard = ({ resource }: { resource: ResourceItemType }) => {
  const Icon = resource.icon;
  return (
    <motion.div variants={cardVariants} className="h-full">
      <Link
        href={resource.href}
        target={resource.isExternal ? "_blank" : undefined}
        className="h-full w-full"
      >
        <Card className="group relative h-full border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1.5">
          {/* Animated Arrow Icon */}
          <ArrowUpRight className="absolute right-4 top-4 size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />

          {/* Content */}
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5">
                <Icon className="size-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {resource.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {resource.description}
              </p>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
