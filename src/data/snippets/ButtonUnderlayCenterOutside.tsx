import type { Snippet } from '~/types/snippet';

const ButtonUnderlayCenterOutside: Snippet = {
  title: 'Button Underlay Center Outside',
  type: 'button',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/ButtonUnderlayCenterOutside.tsx',
  playgroundLink: 'https://play.tailwindcss.com/4ZQwlpQobp',
  source: (
    <button className='group relative overflow-clip rounded-lg bg-slate-50 px-6 py-3 before:absolute before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:scale-0 before:rounded-full before:bg-sky-400 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6]'>
      <span className='relative text-black transition-colors duration-500 ease-in-out group-hover:text-slate-50'>
        Center to outside
      </span>
    </button>
  ),
};

export default ButtonUnderlayCenterOutside;
