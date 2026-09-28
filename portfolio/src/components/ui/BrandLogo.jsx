import { personalInfo } from '../../data/portfolioData';

export default function BrandLogo() {
  const [first, ...rest] = personalInfo.shortName.split(' ');
  return (
    <a href="#home" aria-label={`${personalInfo.name} – home`} className="group inline-flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 font-mono text-sm font-black text-white shadow-lg shadow-cyan-500/30 transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-cyan-500/50">
        KM
      </span>
      <span className="text-lg font-bold tracking-tight text-white">
        {first} <span className="text-gradient">{rest.join(' ')}</span>
      </span>
    </a>
  );
}
