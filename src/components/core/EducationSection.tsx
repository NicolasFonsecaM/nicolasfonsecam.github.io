'use client';

import { educationList } from "@/content/projects";

export default function EducationSection() {
  return (
    <section id="about" className="py-20 border-t border-[#1F222F]/60">
      <div className="space-y-2 mb-12">
        <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// ACADEMIA & FORMAÇÃO</span>
        <h2 className="text-3xl font-bold tracking-tight text-white">Educação e Estudos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationList.map((edu, idx) => (
          <div 
            key={idx}
            className="p-6 rounded-xl bg-[#12141C]/60 border border-[#1F222F] space-y-4"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#00C853] uppercase tracking-wider bg-[#00C853]/10 px-2 py-0.5 rounded border border-[#00C853]/20">
                {edu.status}
              </span>
              <h3 className="text-xl font-bold text-white pt-2">{edu.course}</h3>
              <p className="text-sm font-medium text-[#C2C5D1]">{edu.institution}</p>
            </div>
            <p className="text-xs font-mono text-[#8E929F]">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}