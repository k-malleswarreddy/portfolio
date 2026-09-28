import { personalInfo } from '../data/portfolioData';

const FILE_NAME = 'K_Malleswar_Reddy_Resume.pdf';

export async function downloadResume(event) {
  event?.preventDefault();
  const url = new URL(personalInfo.resume, window.location.origin).href;
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = FILE_NAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch {
    window.open(url, '_blank', 'noopener');
  }
}
