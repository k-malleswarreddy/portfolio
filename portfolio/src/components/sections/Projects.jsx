import { motion } from 'framer-motion';
import { ExternalLink, Check, ShieldCheck, FileCheck2, Zap, Users } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { GithubIcon } from '../ui/BrandIcons';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';

function ProjectBanner() {
  const nodes = [
    { icon: Users, label: 'Profile Service', pos: 'left-[8%] top-[18%]' },
    { icon: FileCheck2, label: 'File Validator', pos: 'right-[8%] top-[18%]' },
    { icon: ShieldCheck, label: 'Circuit Breaker', pos: 'left-[8%] bottom-[18%]' },
    { icon: Zap, label: 'REST Gateway', pos: 'right-[8%] bottom-[18%]' }
  ];

  return (
    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-900/40 via-ink-900 to-cyan-900/40 sm:h-80 lg:h-full lg:min-h-[420px]">
      <div className="grid-bg absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        {[['20%', '28%'], ['80%', '28%'], ['20%', '72%'], ['80%', '72%']].map(([x, y], i) => (
          <motion.line
            key={i}
            x1="50%"
            y1="50%"
            x2={x}
            y2={y}
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.div
          animate={{ boxShadow: ['0 0 0 0 rgba(52,211,153,0.4)', '0 0 0 20px rgba(52,211,153,0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-3xl font-black text-white"
        >
          G
        </motion.div>
        <p className="mt-3 font-mono text-xs font-semibold text-emerald-300">GreenGov Core</p>
      </div>
      {nodes.map(({ icon: Icon, label, pos }) => (
        <div key={label} className={`glass absolute ${pos} flex items-center gap-2 rounded-lg px-3 py-2`}>
          <Icon className="h-4 w-4 text-cyan-300" />
          <span className="hidden font-mono text-[11px] text-slate-200 sm:inline">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="04. Projects" title="Featured work" subtitle="Production-style systems built with a focus on security, resilience, and clean APIs." />

        {projects.map((project) => (
          <Reveal key={project.title}>
            <article className="group relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 opacity-20 blur transition duration-500 group-hover:opacity-50" />
              <div className="glass relative grid overflow-hidden rounded-3xl bg-ink-900/80 lg:grid-cols-2">
                <ProjectBanner />
                <div className="p-6 sm:p-10">
                  <span className="font-mono text-xs tracking-widest text-emerald-300 uppercase">Featured Project</span>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
                  <p className="font-medium text-cyan-300">{project.subtitle}</p>
                  <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub Repository
                    </a>
                    <a
                      href={project.demo}
                      className="glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
