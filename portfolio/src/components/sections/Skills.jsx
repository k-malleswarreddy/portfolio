import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Wrench } from 'lucide-react';
import { skillGroups } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';

const icons = { Code2, Server, Layout, Database, Wrench };

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="font-mono text-cyan-300">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute top-1/3 left-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="02. Skills" title="Technical toolkit" subtitle="Technologies I use to design, build, and ship production backend systems." />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={gi * 0.08} className={group.skills.length > 4 ? 'lg:row-span-2' : ''}>
                <div className="glass group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 p-2.5 text-white shadow-lg shadow-cyan-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {group.skills.map((s, i) => (
                      <SkillBar key={s.name} {...s} delay={i * 0.1} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
