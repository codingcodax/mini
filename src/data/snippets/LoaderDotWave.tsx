import type { Snippet } from '~/types/snippet';

const LoaderDotWave: Snippet = {
  title: 'Loader Dot Wave',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderDotWave.tsx',
  playgroundLink: 'https://play.tailwindcss.com/y0sDYD675Q',
  source: (
    <div className='flex h-8 w-16 items-end justify-between'>
      <div className='h-3 w-3 animate-[jump_1s_ease-in-out_0.55s_infinite] rounded-full bg-slate-50 will-change-transform'></div>
      <div className='h-3 w-3 animate-[jump_1s_ease-in-out_0.7s_infinite] rounded-full bg-slate-50 will-change-transform'></div>
      <div className='h-3 w-3 animate-[jump_1s_ease-in-out_0.855s_infinite] rounded-full bg-slate-50 will-change-transform'></div>
      <div className='h-3 w-3 animate-[jump_1s_ease-in-out_infinite] rounded-full bg-slate-50 will-change-transform'></div>
    </div>
  ),
  animation: `keyframes: {
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1.25rem)' },
          '100%': { transform: 'translateY(0)' },
        },
      }`,
};

export default LoaderDotWave;
