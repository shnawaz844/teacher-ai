import React from "react";
import DoctorsAgentList from "./_components/DoctorsAgentList";
import { Sparkles, BookOpen, Award, CheckCircle2 } from "lucide-react";

function Dashboard() {
  return (
    <div className="relative min-h-screen bg-[#070708] text-white px-4 md:px-12 py-8">
      {/* Background glow effects matching Emversity ****/}
      <div className="absolute top-0 right-10 w-[500px] h-[300px] bg-gradient-to-b from-[#98230a]/20 via-[#E8654A]/10 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-40 left-0 w-[350px] h-[350px] bg-[#E8654A]/5 blur-[120px] pointer-events-none" />

      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#111114] via-[#17171C] to-[#121216] p-7 md:p-10 mb-10 shadow-2xl">
        {/* Subtle orange accent glow line on top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8654A] to-transparent" />

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8654A]/20 border border-[#E8654A]/30 text-[#FF8566] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Emversity Industry-Integrated Skilling</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Student Skilling Dashboard
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-2 leading-relaxed">
              Connect with 24/7 AI-powered educators for hands-on concept clarity, practical viva prep, and curriculum mastery.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-white/60 mt-6">
              <CheckCircle2 className="w-4 h-4 text-[#E8654A]" />
              <span>Degrees awarded by partner universities</span>
            </div>
          </div>

          {/* Quick Metrics Badge on the right */}
          <div className="hidden lg:flex flex-col gap-3 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 min-w-[240px]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#E8654A]/20 text-[#FF8566]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50 font-medium">Platform Mode</div>
                <div className="text-sm font-bold text-white">Live Voice Interactive</div>
              </div>
            </div>
            <div className="h-px bg-white/10 my-1" />
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50 font-medium">Outcome Tracking</div>
                <div className="text-sm font-bold text-white">Detailed Post-Session Report</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Subject Teachers / Mentors List */}
      <DoctorsAgentList />
    </div>
  );
}

export default Dashboard;