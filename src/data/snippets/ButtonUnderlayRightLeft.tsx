import type { Snippet } from '~/types/snippet';

const ButtonUnderlayRightLeft: Snippet = {
  title: 'Button Underlay Right Left',
  type: 'button',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/ButtonUnderlayRightLeft.tsx',
  playgroundLink: 'https://play.tailwindcss.com/F7BO4si2ye',
  source: (
    <button className='group relative overflow-x-clip rounded-lg bg-slate-50 px-6 py-3 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-left before:scale-x-0 before:bg-sky-400 before:transition-transform before:duration-500 before:ease-in-out before:hover:origin-right hover:before:scale-x-100'>
      <span className='relative text-black transition-colors duration-500 ease-in-out group-hover:text-slate-50'>
        Right to left
      </span>
    </button>
  ),
};

export default ButtonUnderlayRightLeft;
