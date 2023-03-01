import type { Snippet } from '~/types/snippet';

const ButtonUnderlayOutsideCenter: Snippet = {
  title: 'Button Underlay Outside Center',
  type: 'button',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/ButtonUnderlayOutsideCenter.tsx',
  playgroundLink: 'https://play.tailwindcss.com/0Bwo2emUoz',
  source: (
    <button className='group relative overflow-clip rounded-lg bg-slate-50 px-6 py-3 before:absolute before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:scale-[6] before:rounded-full before:bg-sky-400 before:transition before:duration-500 before:ease-in-out hover:before:scale-0'>
      <span className='relative text-slate-50 transition-colors duration-500 ease-in-out group-hover:text-black'>
        Outside to center
      </span>
    </button>
  ),
};

export default ButtonUnderlayOutsideCenter;
