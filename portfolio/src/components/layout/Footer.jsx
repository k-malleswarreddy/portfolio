import { Mail, ArrowUp } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import BrandLogo from '../ui/BrandLogo';

const socials = [
  { href: personalInfo.github, label: 'GitHub', icon: <GithubIcon /> },
  { href: personalInfo.linkedin, label: 'LinkedIn', icon: <LinkedinIcon /> },
  { href: `mailto:${personalInfo.email}`, label: 'Email', icon: <Mail className="h-5 w-5" /> }
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-900/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <BrandLogo />
            <p className="mt-3 max-w-xs text-sm text-slate-400">{personalInfo.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-sm text-slate-400 transition hover:text-cyan-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Connect</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass rounded-xl p-3 text-slate-300 transition hover:-translate-y-1 hover:text-cyan-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">{personalInfo.email}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <a href="#home" aria-label="Back to top" className="glass rounded-lg p-2 transition hover:text-cyan-300">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
