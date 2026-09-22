import { AITeacherAgents } from "@/shared/list";
import React from "react";
import TeacherAgentCard from "./TeacherAgentCard";
import { Sparkles, GraduationCap } from "lucide-react";

/**
 * DoctorsAgentList Component (Emversity AI Subject Mentors)
 * Displays a responsive grid of luxury mentor cards matching the Emversity design system.
 */
function DoctorsAgentList() {
  return (
    <div className="mt-8 mb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8654A]/15 border border-[#E8654A]/30 text-[#FF8566] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E8654A]" />
            <span>Interactive 1-on-1 Voice Mentorship</span>
          </div>
          <h2 className="font-extrabold text-2xl md:text-3xl text-white tracking-tight">
            Emversity AI Subject Mentors
          </h2>
          <p className="text-white/60 text-sm mt-1 max-w-2xl leading-relaxed">
            Practice concepts, solve numericals, and prepare for academic and clinical excellence with industry-integrated AI educators.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 w-fit">
          <GraduationCap className="w-4 h-4 text-[#E8654A]" />
          <span>Curriculum Aligned · 24/7 Available</span>
        </div>
      </div>

      {/* Responsive Grid layout for teacher cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {AITeacherAgents.map((teacher, index) => (
          <TeacherAgentCard key={teacher.id || index} TeacherAgent={teacher} />
        ))}
      </div>
    </div>
  );
}

export default DoctorsAgentList;
