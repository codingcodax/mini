import type { Snippet } from '~/types/snippet';

const ButtonUnderlayLeftRight: Snippet = {
  title: 'Button Underlay Left Right',
  type: 'button',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/ButtonUnderlayLeftRight.tsx',
  playgroundLink: 'https://play.tailwindcss.com/eygwCkp0Du',
  source: (
    <button className='group relative overflow-x-clip rounded-lg bg-slate-50 px-6 py-3 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-right before:scale-x-0 before:bg-sky-400 before:transition-transform before:duration-500 before:ease-in-out before:hover:origin-left hover:before:scale-x-100'>
      <span className='relative text-black transition-colors duration-500 ease-in-out group-hover:text-slate-50'>
        Left to right
      </span>
    </button>
  ),
};

export default ButtonUnderlayLeftRight;
