"use client";
import React from "react";
import { motion } from "motion/react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EmversityLogo from "@/components/EmversityLogo";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Stethoscope,
  Building2,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E8654A]/30 selection:text-white overflow-x-hidden font-sans">
      {/* Ambient glowing orb matching emversity.com */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-[#98230a] to-transparent blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-[-150px] w-[500px] h-[500px] rounded-full bg-[#E8654A]/10 blur-[140px] pointer-events-none" />

      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#C8654A] via-[#D85A3A] to-[#C8654A] text-white text-center py-2 px-4 text-xs font-semibold tracking-wide relative overflow-hidden z-50">
        <span className="flex items-center justify-center gap-2">
          <GraduationCap className="w-4 h-4" />
          <span>Industry-Integrated Skilling · Degrees Awarded by Partner Universities</span>
          <Link href="/dashboard" className="underline hover:no-underline font-bold ml-1">
            Start Learning →
          </Link>
        </span>
      </div>

      <Navbar />

      <main className="relative z-10 pt-4 md:pt-8 px-5 lg:px-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center py-2 md:py-4">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-semibold text-white/90 tracking-wide mb-3 md:mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#E8654A] animate-pulse" />
              <span>India&apos;s Employment & Education Engine</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] md:tracking-[-2px] text-white mb-3 md:mb-4"
            >
              From Classroom <br />
              <span className="bg-gradient-to-r from-[#f26a3d] via-[#f97316] to-[#c79f33] bg-clip-text text-transparent">
                to Career.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-white/80 leading-relaxed mb-5 max-w-xl"
            >
              Work-integrated 24/7 voice AI mentorship in Healthcare, Allied Sciences & Academic tracks. Clarify concepts, practice vivas, and graduate job-ready.
            </motion.p>

            {/* Skilling Tracks Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex gap-2.5 mb-5 flex-wrap"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#E8654A]" /> Allied Health & Science
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#E8654A]" /> Core Academic Mentors
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#E8654A]" /> Industry Placements
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="h-11 md:h-12 px-7 rounded-full text-sm md:text-base font-bold bg-gradient-to-r from-[#E8654A] to-[#F97316] hover:opacity-95 text-white shadow-[0_0_30px_rgba(232,101,74,0.4)] transition-all hover:scale-105 active:scale-95 border-0 cursor-pointer"
                >
                  Explore AI Mentors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 md:h-12 px-7 rounded-full text-sm md:text-base font-bold border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/60 transition-all hover:scale-105 cursor-pointer"
                  style={{ color: 'white', backgroundColor: 'transparent' }}
                >
                  Start Practice Viva
                </Button>
              </Link>
            </motion.div>

            <p className="text-[12px] text-white/50 mt-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E8654A]" />
              Approved Training Partner of NSDC · Industry Skilling by Emversity
            </p>
          </div>

          {/* Right Side Visual Panel */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="relative w-full max-w-md rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-5 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#E8654A]/30 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E8654A] to-[#F97316] flex items-center justify-center font-bold text-white text-sm shadow-md">
                    EA
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Live AI Mentorship</h4>
                    <p className="text-[11px] text-white/60">Voice Interactive Session</p>
                  </div>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8654A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8654A]" />
                </span>
              </div>

              {/* Sample Mentorship Dialogue Card */}
              <div className="space-y-2.5 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-white/80">
                  <span className="font-bold text-[#FF8566] block mb-0.5">AI Teacher:</span>
                  &quot;Welcome! Let us review the anatomical pathways of the human circulatory system. What happens during ventricular systole?&quot;
                </div>
                <div className="bg-[#E8654A]/15 p-3 rounded-xl border border-[#E8654A]/30 text-white/90 ml-4 sm:ml-6">
                  <span className="font-bold text-white block mb-0.5">Student:</span>
                  &quot;During systole, the ventricles contract and blood is pumped into the aorta and pulmonary artery.&quot;
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-white/80">
                  <span className="font-bold text-emerald-400 block mb-0.5">Evaluation & Feedback:</span>
                  &quot;Spot on! Excellent clinical accuracy. Now let&apos;s discuss the atrioventricular valve dynamics.&quot;
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-white/60">Audio Latency: &lt; 400ms</span>
                <Link href="/dashboard">
                  <span className="text-xs font-bold text-[#FF8566] hover:underline cursor-pointer">
                    Try Live Demo →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Industry Backed Partners Row */}
        <section className="mt-16 pt-10 border-t border-white/10 text-center pb-16">
          <div className="text-[11px] font-bold text-white/50 uppercase tracking-[2.5px] mb-6">
            Trusted by Leading Healthcare & Academic Partners
          </div>
          <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap opacity-75">
            {["Fortis", "Accord Healthcare", "Metro Hospitals", "TRSCH", "Pi Health"].map(
              (partner, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white/70"
                >
                  {partner}
                </div>
              )
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#070708] py-8 px-6 md:px-12 text-white/60 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <EmversityLogo subtitle="Teacher AI" className="h-6" />
          <p>© {new Date().getFullYear()} Emversity Platform. An Approved Training Partner of NSDC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between px-6 md:px-12 py-3.5 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10">
      <Link href="/">
        <EmversityLogo subtitle="Teacher AI" className="h-6 md:h-7" />
      </Link>

      <div className="flex items-center gap-4">
        {!user ? (
          <Link href="/dashboard">
            <Button className="rounded-full px-6 py-2 bg-gradient-to-r from-[#E8654A] to-[#F97316] text-white font-semibold text-xs md:text-sm hover:opacity-95 shadow-md shadow-[#E8654A]/30">
              Get Started
            </Button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button className="rounded-full px-5 py-2 bg-gradient-to-r from-[#E8654A] to-[#F97316] text-white font-semibold text-xs md:text-sm">
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </div>
        )}
      </div>
    </nav>
  );
};
