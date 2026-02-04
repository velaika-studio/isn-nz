"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-background relative overflow-hidden transition-colors duration-1000">

      {/* 1. ATMOSPHERIC MINIMALISM */}

      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-multiply dark:mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* Very Soft Gradient (Static) */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />

      {/* 2. NAVIGATION (MINIMAL) */}
      <div className="absolute top-12 right-12 z-50 animate-in fade-in duration-1000">
        <ThemeToggle />
      </div>

      {/* 3. CORE IDENTITY (THE CENTERPIECE) */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center space-y-20">

        {/* Logo - Defined & Quiet */}
        <div className="animate-in fade-in zoom-in-95 duration-[1500ms] ease-out-expo">
          <Image
            src="/isn-logo.png"
            alt="ISN-NZ Logo"
            width={110}
            height={110}
            className="w-24 h-24 md:w-28 md:h-28 grayscale contrast-125 opacity-90 dark:invert dark:contrast-100 dark:opacity-75 transition-all duration-700"
            priority
          />
        </div>

        {/* Typography - The "Journal" Style */}
        <div className="flex flex-col items-center space-y-8 text-center px-4">

          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-foreground font-serif italic animate-in slide-in-from-bottom-4 fade-in duration-[1200ms] delay-300 fill-mode-both">
              Indian Society of <span className="not-italic font-sans font-bold text-primary italic">Nephrology</span>
            </h1>

            <div className="flex items-center justify-center space-x-6 animate-in fade-in duration-[1500ms] delay-700 fill-mode-both">
              <div className="h-px w-10 bg-primary/20" />
              <h2 className="text-lg md:text-2xl font-bold text-muted-foreground tracking-[0.4em] font-sans uppercase">
                North Zone
              </h2>
              <div className="h-px w-10 bg-primary/20" />
            </div>
          </div>
        </div>

        {/* Status Label (The "Whisper") */}
        <div className="pt-12 flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-[1500ms] delay-1000 fill-mode-both">
          <div className="h-16 w-px bg-gradient-to-b from-primary/30 to-transparent" />

          <div className="text-[10px] md:text-xs font-black tracking-[0.8em] text-muted-foreground/60 uppercase ml-[0.8em]">
            Coming Soon
          </div>
        </div>
      </div>

      {/* 4. DISCRETE FOOTER */}
      <footer className="absolute bottom-12 z-20 text-[9px] text-muted-foreground/20 font-bold tracking-[0.3em] uppercase animate-in fade-in duration-[2000ms] delay-[1500ms] fill-mode-both text-center max-w-xs md:max-w-none">
        © {new Date().getFullYear()} ISN-NZ • Promoting Clinical Excellence
      </footer>

      <style jsx global>{`
        .ease-out-expo {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </main>
  );
}
