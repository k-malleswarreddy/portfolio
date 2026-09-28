import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { downloadResume } from '../../utils/downloadResume';

const codeLines = [
  { t: '@RestController', c: 'text-amber-300' },
  { t: '@RequestMapping("/api/v1/engineer")', c: 'text-amber-300' },
  { t: 'public class MalleswarController {', c: 'text-slate-200' },
  { t: '  @GetMapping', c: 'text-amber-300' },
  { t: '  public Engineer profile() {', c: 'text-slate-200' },
  { t: '    return Engineer.builder()', c: 'text-cyan-300' },
  { t: '      .stack("Java", "Spring Boot")', c: 'text-emerald-300' },
  { t: '      .focus("Microservices")', c: 'text-emerald-300' },
  { t: '      .company("Cognizant")', c: 'text-emerald-300' },
  { t: '      .build();', c: 'text-cyan-300' },
  { t: '  }', c: 'text-slate-200' },
  { t: '}', c: 'text-slate-200' }
];

function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === '';
    const timeout = setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          return setIndex((i) => i + 1);
        }
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      },
      done ? pause : deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const socials = [
  { href: personalInfo.github, label: 'GitHub', icon: <GithubIcon /> },
  { href: personalInfo.linkedin, label: 'LinkedIn', icon: <LinkedinIcon /> },
  { href: `mailto:${personalInfo.email}`, label: 'Email', icon: <Mail className="h-5 w-5" /> }
];

export default function Hero() {
  const typed = useTypewriter(personalInfo.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/30 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -right-32 -bottom-32 h-[28rem] w-[28rem] rounded-full bg-purple-600/30 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-slate-300">Programmer Analyst Trainee @ Cognizant</span>
          </div>

          <h1 className="text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
            Hi, I'm <br />
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          <p className="mt-5 h-8 font-mono text-lg text-cyan-300 sm:text-xl" aria-label={personalInfo.title}>
            <span aria-hidden="true">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-cyan-300" />
            </span>
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">{personalInfo.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={personalInfo.resume}
              download="K_Malleswar_Reddy_Resume.pdf"
              onClick={downloadResume}
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/50"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="glass rounded-xl p-3 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-30 blur-xl" />
          <div className="glass relative overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-slate-500">MalleswarController.java</span>
            </div>
            <pre className="p-6 font-mono text-sm leading-7">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className={line.c}
                >
                  <span className="mr-4 inline-block w-5 text-right text-slate-600 select-none">{i + 1}</span>
                  {line.t}
                </motion.div>
              ))}
            </pre>
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-300">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </a>
    </section>
  );
}
