import type { Snippet } from '~/types/snippet';

const LoaderPulsar: Snippet = {
  title: 'Loader Pulsar',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderPulsar.tsx',
  playgroundLink: 'https://play.tailwindcss.com/FIwLbQXm35',
  source: (
    <div className='relative h-10 w-10 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:scale-0 before:animate-[pulsar_1.5s_ease-in-out_infinite] before:rounded-full before:bg-slate-50 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:scale-0 after:animate-[pulsar_1.5s_ease-in-out_-0.75s_infinite] after:rounded-full after:bg-slate-50'></div>
  ),
  animation: `keyframes: {
        pulsar: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '50%': { transform: 'scale(1)', opacity: '0.25' },
          '100%': { transform: 'scale(0)', opacity: '1' },
        },
      }`,
};

export default LoaderPulsar;
