import type { Snippet } from '~/types/snippet';

const LoaderRipples: Snippet = {
  title: 'Loader Ripples',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderRipples.tsx',
  playgroundLink: 'https://play.tailwindcss.com/PeGiH19aS9',
  source: (
    <div className='relative h-11 w-11 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:scale-0 before:animate-[ping2_2s_linear_infinite] before:rounded-full before:bg-slate-50 before:opacity-0 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:scale-0 after:animate-[ping2_2s_linear_-0.5s_infinite] after:rounded-full after:bg-slate-50 after:opacity-0'>
      <div className='relative h-11 w-11 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:scale-0 before:animate-[ping2_2s_linear_-1s_infinite] before:rounded-full before:bg-slate-50 before:opacity-0 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:scale-0 after:animate-[ping2_2s_linear_-1.5s_infinite] after:rounded-full after:bg-slate-50 after:opacity-0'></div>
    </div>
  ),
  animation: `keyframes: {
        ping2: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      }`,
};

export default LoaderRipples;
