import { GraduationCap, Users, CalendarCheck, Trophy } from 'lucide-react';
import { education, leadership } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';

const leadIcons = { Users, CalendarCheck };

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="06. Education & Leadership" title="Foundations & impact" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
              <GraduationCap className="h-5 w-5 text-cyan-400" />
              Education
            </h3>
            <div className="space-y-5">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.1}>
                  <article className="glass rounded-2xl p-6 transition hover:border-cyan-400/40">
                    <h4 className="font-bold text-white">{e.degree}</h4>
                    <p className="mt-1 text-slate-400">{e.institution}</p>
                    <span className="mt-4 inline-block rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 px-3 py-1 font-mono text-sm font-semibold text-cyan-200">
                      {e.score}
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="leadership">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
              <Trophy className="h-5 w-5 text-amber-400" />
              Leadership & Activities
            </h3>
            <div className="space-y-5">
              {leadership.map((l, i) => {
                const Icon = leadIcons[l.icon];
                return (
                  <Reveal key={l.title} delay={i * 0.1}>
                    <article className="glass flex gap-4 rounded-2xl p-6 transition hover:border-amber-400/40">
                      <div className="h-fit rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-3 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{l.title}</h4>
                        <p className="mt-1 text-slate-400">{l.description}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
