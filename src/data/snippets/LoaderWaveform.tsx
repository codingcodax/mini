import type { Snippet } from '~/types/snippet';

const LoaderWaveform: Snippet = {
  title: 'Loader Waveform',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderWaveform.tsx',
  playgroundLink: 'https://play.tailwindcss.com/8TM9j8oUgN',
  source: (
    <div className='flex h-8 w-9 flex-row flex-nowrap items-center justify-between'>
      <div className='h-full w-1 animate-[grow_1s_ease-in-out_0.55s_infinite] bg-slate-50'></div>
      <div className='h-full w-1 animate-[grow_1s_ease-in-out_0.7s_infinite] bg-slate-50'></div>
      <div className='h-full w-1 animate-[grow_1s_ease-in-out_0.85s_infinite] bg-slate-50'></div>
      <div className='h-full w-1 animate-[grow_1s_ease-in-out_infinite] bg-slate-50'></div>
    </div>
  ),
  animation: `keyframes: {
        grow: {
          '0%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.3)' },
        },
      },`,
};

export default LoaderWaveform;
