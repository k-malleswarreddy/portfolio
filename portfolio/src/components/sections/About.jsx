import { Server, Cloud, Bot, Boxes } from 'lucide-react';
import { about } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';

const focus = [
  { icon: Server, title: 'Backend Development', text: 'Spring Boot services, REST APIs, and clean domain design.' },
  { icon: Boxes, title: 'Microservices', text: 'Resilient, loosely coupled services with circuit breakers.' },
  { icon: Cloud, title: 'Cloud Technologies', text: 'Exploring deployment, scaling, and cloud-native patterns.' },
  { icon: Bot, title: 'AI-Assisted Dev', text: 'Shipping faster with GitHub Copilot and Claude.' }
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="01. About Me" title="Engineering reliable backends" />

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 leading-relaxed text-slate-300 last:mb-0">
                  {p}
                </p>
              ))}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {about.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center">
                    <div className="text-2xl font-bold text-gradient">{s.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {focus.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="glass group flex gap-4 rounded-2xl p-5 transition hover:border-cyan-400/40">
                  <div className="h-fit rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 p-3 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
