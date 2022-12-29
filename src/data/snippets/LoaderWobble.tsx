import type { Snippet } from '~/types/snippet';

const LoaderWobble: Snippet = {
  title: 'Loader Wobble',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderWobble.tsx',
  playgroundLink: 'https://play.tailwindcss.com/Vk5Qy4pte2',
  source: (
    <div className='relative flex w-14 items-center justify-start before:h-3 before:w-3 before:translate-x-full before:animate-[wobble_1s_ease-in-out_infinite] before:rounded-full before:bg-slate-50'></div>
  ),
  animation: `keyframes: {
        wobble: {
          '0%': { transform: 'translateX(0rem)' },
          '50%': { transform: 'translateX(2.7rem)' },
          '100%': { transform: 'translateX(0rem)' },
        },
      }`,
};

export default LoaderWobble;
