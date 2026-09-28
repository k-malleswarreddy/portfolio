import { Award, BadgeCheck } from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="05. Certifications" title="Credentials & learning" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl">
                <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.gradient} opacity-20 blur-2xl transition group-hover:opacity-40`} />
                <div className={`relative mb-6 inline-flex rounded-xl bg-gradient-to-br ${c.gradient} p-3 text-white shadow-lg`}>
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="relative font-semibold leading-snug text-white">{c.title}</h3>
                <p className="relative mt-3 flex items-center gap-1.5 text-sm text-slate-400">
                  <BadgeCheck className="h-4 w-4 text-cyan-400" />
                  {c.issuer}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
