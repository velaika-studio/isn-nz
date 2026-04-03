"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const ABSTRACT_SUBMIT_MAILTO = `mailto:isnnorthzone@gmail.com?subject=${encodeURIComponent("Abstract Submission - NZ-ISNCON 2026")}&body=${encodeURIComponent(
  "Dear NZ-ISNCON 2026 Scientific Committee,\n\nPlease find my abstract submission below:\n\nType of Study: [Original Study / Case Report]\n\nTitle: \n\nAuthors: \n\nAffiliation: \n\nAbstract Body:\n\nKeywords: \n\nPresenting Author Email: \n\nThank you."
)}`;

export default function AbstractGuidelinesPage() {
  return (
    <Layout>
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-20">
        {/* Background SVG */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/images/abstract-page.svg"
            alt=""
            fill
            className="object-contain opacity-10"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-2xl text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-primary/10"
          >
            <FileText className="size-12 text-primary" />
          </motion.div>

          {/* Deadline Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-600 dark:text-red-400">
              <AlertCircle className="size-4" />
              Deadline: 4th April 2026
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Abstract Submission
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            Submit your research abstracts for NZ-ISNCON 2026 directly to our committee via email.
          </p>

          {/* Email Submit Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-10 max-w-md"
          >
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 text-left backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <Mail className="size-5 text-primary" />
                <h3 className="font-semibold text-foreground">Submit Abstract via Email</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Click below to open a pre-filled email template with all required fields.
              </p>
              <Button asChild className="w-full gap-2">
                <a href={ABSTRACT_SUBMIT_MAILTO}>
                  <Mail className="size-4" />
                  Submit Abstract Now
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Sends to{" "}
                <span className="font-medium text-foreground">isnnorthzone@gmail.com</span>
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/registration">
                Register for Conference
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
