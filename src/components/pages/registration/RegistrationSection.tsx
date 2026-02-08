"use client";

import { ArrowRight, ExternalLink, QrCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { REGISTRATION_LINK } from "@/lib/constants/registration-data";

/**
 * Registration QR code display component
 */
const RegistrationQRCode = () => {
  return (
    <div className="overflow-hidden rounded-2xl border-4 border-white/10 bg-white p-6 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
      <Image
        src="/images/register_qr.png"
        alt="Registration Form QR Code"
        width={320}
        height={320}
        className="size-64 md:size-80 object-contain"
        priority
      />
    </div>
  );
};

/**
 * Registration section with form link and QR code tabs
 */
export const RegistrationSection = () => {
  return (
    <Tabs defaultValue="online" className="w-full">
      <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="online" className="gap-2">
          <ExternalLink className="size-4" />
          Online Form
        </TabsTrigger>
        <TabsTrigger value="qr" className="gap-2">
          <QrCode className="size-4" />
          Scan to Register
        </TabsTrigger>
      </TabsList>

      <TabsContent value="online" className="mt-8">
        <Card className="mx-auto max-w-md border-border/50 bg-card/60 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <ExternalLink className="size-7 text-primary" />
            </div>
            <CardTitle>Register Online</CardTitle>
            <CardDescription>
              Fill out our secure online registration form
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-10 px-8">
            <Button
              size="lg"
              className="h-12 w-full gap-2 shadow-lg shadow-primary/20"
              asChild
            >
              <Link
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Registration Form
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="qr" className="mt-8">
        <Card className="mx-auto max-w-md border-border/50 bg-card/60 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <QrCode className="size-7 text-primary" />
            </div>
            <CardTitle>Scan to Register</CardTitle>
            <CardDescription>
              Scan this QR code with your smartphone camera
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-10">
            <RegistrationQRCode />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
