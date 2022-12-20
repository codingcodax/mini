import type { Snippet } from '~/types/snippet';

const LoaderDotPulse: Snippet = {
  title: 'Loader Dot Pulse',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderDotPulse.tsx',
  playgroundLink: 'https://play.tailwindcss.com/CMFzo5EtZc',
  source: (
    <div className='relative flex w-10 justify-between'>
      <div className='block h-2 w-2 animate-[pulse2_1.3s_ease-in-out_infinite] rounded-full bg-slate-50'></div>
      <div className='block h-2 w-2 animate-[pulse2_1.3s_ease-in-out_0.1625s_infinite] rounded-full bg-slate-50'></div>
      <div className='block h-2 w-2 animate-[pulse2_1.3s_ease-in-out_0.39s_infinite] rounded-full bg-slate-50'></div>
    </div>
  ),
  animation: `keyframes: {
        pulse2: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(0)' },
        },
      }`,
};

export default LoaderDotPulse;
