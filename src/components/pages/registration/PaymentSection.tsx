"use client";

import { Building2, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bankDetails } from "@/lib/constants/registrationData";

/**
 * Payment QR code display component
 */
const PaymentQRCode = () => {
  return (
    <div className="overflow-hidden rounded-2xl border-4 border-white/10 bg-white p-6 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
      <Image
        src="/images/payment_qr.png"
        alt="UPI Payment QR Code"
        width={320}
        height={320}
        className="size-64 md:size-80 object-contain"
        priority
      />
    </div>
  );
};

/**
 * Bank details with copy functionality
 */
const BankDetailsContent = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const details = [
    { label: "Account Name", value: bankDetails.accountName },
    { label: "Bank Name", value: bankDetails.bankName },
    { label: "Branch", value: bankDetails.branch },
    { label: "Account Number", value: bankDetails.accountNumber },
    { label: "IFSC Code", value: bankDetails.ifscCode },
    { label: "PAN", value: bankDetails.pan || "AABAI0867P" },
    { label: "GSTIN", value: bankDetails.gstin || "07AABAI086P1Z9" },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {details.map((detail) => (
        <button
          key={detail.label}
          type="button"
          onClick={() => handleCopyToClipboard(detail.value, detail.label)}
          className="group flex flex-col items-start rounded-lg border border-border/50 bg-muted/30 p-3 text-left transition-all hover:border-primary/30 hover:bg-muted/50"
        >
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {detail.label}
          </div>
          <div className="mt-0.5 font-semibold text-foreground">
            {detail.value}
          </div>
          <div className="mt-1 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
            {copiedField === detail.label ? "Copied!" : "Click to copy"}
          </div>
        </button>
      ))}
    </div>
  );
};

/**
 * Payment section with UPI/Bank Transfer tabs
 */
export const PaymentSection = () => {
  return (
    <Tabs defaultValue="upi" className="w-full">
      <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="upi" className="gap-2">
          <Smartphone className="size-4" />
          UPI Payment
        </TabsTrigger>
        <TabsTrigger value="bank" className="gap-2">
          <Building2 className="size-4" />
          Bank Transfer
        </TabsTrigger>
      </TabsList>

      <TabsContent value="upi" className="mt-8">
        <Card className="mx-auto max-w-md border-border/50 bg-card/60 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle>Scan to Pay</CardTitle>
            <CardDescription>Use any UPI app to scan and pay</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <PaymentQRCode />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              After payment, take a screenshot and submit with your registration
              form.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="bank" className="mt-8">
        <Card className="mx-auto max-w-2xl border-border/50 bg-card/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <Building2 className="size-6 text-primary" />
              </div>
              Bank Transfer Details
            </CardTitle>
            <CardDescription>
              Transfer the registration fee to the following account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BankDetailsContent />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
