import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const contactItems = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/-/g, '')}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'malleswar-reddy-kalvapalli', href: personalInfo.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'k-malleswarreddy', href: personalInfo.github },
  { icon: MapPin, label: 'Location', value: personalInfo.location }
];

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${form.name}`,
          from_name: 'Portfolio Contact Form',
          ...form
        })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="07. Contact" title="Let's build something together" subtitle="Open to backend engineering roles, collaborations, and interesting conversations." />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="space-y-4 lg:col-span-2">
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs tracking-wider text-slate-500 uppercase">{label}</p>
                    <p className="truncate font-medium text-white">{value}</p>
                  </div>
                </>
              );
              const cls = 'glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-cyan-400/40';
              return href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={cls}>
                  {content}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {content}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass space-y-5 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                  <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="john@company.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                <textarea id="message" name="message" rows="6" required value={form.message} onChange={onChange} placeholder="Tell me about the opportunity..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Send Message
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" /> Thanks! I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-300">
                    <AlertCircle className="h-4 w-4" /> Something went wrong. Please email me directly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
