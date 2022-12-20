import type { Snippet } from '~/types/snippet';

const LoaderPing: Snippet = {
  title: 'Loader Ping',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderPing.tsx',
  playgroundLink: 'https://play.tailwindcss.com/PeGiH19aS9',
  source: (
    <div className='relative h-11 w-11 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:scale-0 before:animate-[ping2_2s_linear_infinite] before:rounded-full before:bg-slate-50 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:scale-0 after:animate-[ping2_2s_linear_-1s_infinite] after:rounded-full after:bg-slate-50'></div>
  ),
  animation: `keyframes: {
        ping2: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      }`,
};

export default LoaderPing;
