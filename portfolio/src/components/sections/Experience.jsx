import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle eyebrow="03. Experience" title="Where I've worked" />

        <ol className="relative border-l border-white/10 pl-8 sm:pl-10">
          {experiences.map((exp, i) => (
            <li key={exp.company} className="mb-12 last:mb-0">
              <span className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 ring-8 ring-ink-950">
                <Briefcase className="h-4 w-4 text-white" />
              </span>
              <Reveal delay={i * 0.1}>
                <article className="glass group rounded-2xl p-6 transition duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="mt-1 font-semibold text-cyan-300">{exp.company}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs ${
                        exp.current ? 'border border-emerald-400/30 bg-emerald-400/10 text-emerald-300' : 'border border-white/10 bg-white/5 text-slate-300'
                      }`}
                    >
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-3 text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="rounded-md bg-indigo-500/10 px-2.5 py-1 font-mono text-xs text-indigo-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
