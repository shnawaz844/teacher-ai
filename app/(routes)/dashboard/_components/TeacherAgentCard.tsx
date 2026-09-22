"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { IconArrowRight } from "@tabler/icons-react";
import axios from "axios";
import { Loader2Icon, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

/**
 * Type definition for each teacher agent card
 */
export type TeacherAgent = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
  voiceId?: string;
  gender: "male" | "female";
  subscriptionRequired: boolean;
};

type Props = {
  TeacherAgent: TeacherAgent;
};

function TeacherAgentCard({ TeacherAgent }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { has } = useAuth();

  //@ts-ignore
  const paidUser = has && has({ plan: "pro" });

  // Calculate dynamic session count based on ID for authenticity
  const sessionCount = 200 + ((TeacherAgent.id * 37) % 150);

  /**
   * Handle Start Lesson Button Click
   */
  const onStartLesson = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await axios.post("/api/session-chat", {
        notes: "New Learning Session",
        selectedTeacher: TeacherAgent,
      });

      if (result.data?.sessionId) {
        router.push("/dashboard/teacher-agent/" + result.data.sessionId);
      }
    } catch (error) {
      console.error("Error starting lesson:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onStartLesson}
      className="group relative flex flex-col justify-end overflow-hidden rounded-[26px] bg-[#0A0A0A] border border-white/10 hover:border-[#E8654A]/60 shadow-2xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(232,101,74,0.25)] hover:-translate-y-1 cursor-pointer min-h-[390px] w-full"
    >
      {/* Warm Ambient Spotlight in background (Matches Emversity brand aesthetic) */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#C8654A]/35 via-[#98230a]/20 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#E8654A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Left Frosted Play Button (Matches reference screenshot) */}
      <div className="absolute top-3.5 left-3.5 z-20 w-10 h-10 rounded-full bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-[#E8654A] group-hover:border-[#E8654A] transition-all duration-300">
        <Play className="w-4 h-4 fill-white translate-x-0.5" />
      </div>

      {/* Top Right Emversity Tag */}
      <div className="absolute top-3.5 right-3.5 z-20">
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white/80 tracking-wide">
          Emversity AI
        </span>
      </div>

      {/* Full Portrait Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={TeacherAgent.image}
          alt={TeacherAgent.specialist}
          fill
          className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Seamless bottom fade gradient into solid dark card base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
      </div>

      {/* Card Content Overlay (Matches screenshot typography & layout) */}
      <div className="relative z-20 p-4 pt-10 flex flex-col justify-end">
        {/* Teacher / Specialist Name */}
        <h3 className="font-bold text-lg md:text-xl text-white tracking-tight leading-snug group-hover:text-[#FF8566] transition-colors">
          {TeacherAgent.specialist}
        </h3>

        {/* Short Role / Description */}
        <p className="text-xs text-white/70 line-clamp-2 mt-1 font-normal leading-relaxed">
          {TeacherAgent.description}
        </p>

        {/* Emversity Academy Track Label */}
        <div className="flex items-center gap-1.5 mt-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8654A]" />
          <span className="text-[11px] font-medium text-white/85 tracking-wide">
            Emversity School of Skills
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-end">
          <Button
            size="sm"
            className="h-7 px-3 rounded-full text-xs font-semibold bg-gradient-to-r from-[#E8654A] to-[#F97316] text-white hover:opacity-95 shadow-md shadow-[#E8654A]/25 border-0"
            disabled={loading}
          >
            {loading ? (
              <Loader2Icon className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <div className="flex items-center gap-1">
                <span>Start</span>
                <IconArrowRight className="h-3 w-3" />
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TeacherAgentCard;
