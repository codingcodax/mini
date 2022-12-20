import type { Snippet } from '~/types/snippet';

const LoaderWobble: Snippet = {
  title: 'Loader Wobble',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderWobble.tsx',
  playgroundLink: 'https://play.tailwindcss.com/WjB9P03al6',
  source: (
    <div className='relative flex w-10 items-center justify-start before:h-2 before:w-2 before:translate-x-full before:animate-[wobble_1s_ease-in-out_infinite] before:rounded-full before:bg-slate-50'></div>
  ),
  animation: `keyframes: {
        wobble: {
          '0%': { transform: 'translateX(0rem)' },
          '50%': { transform: 'translateX(2rem)' },
          '100%': { transform: 'translateX(0rem)' },
        },
      }`,
};

export default LoaderWobble;
