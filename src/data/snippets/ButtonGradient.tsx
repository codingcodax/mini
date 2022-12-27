import type { Snippet } from '~/types/snippet';

const ButtonGradient: Snippet = {
  title: 'Button Gradient',
  type: 'button',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/ButtonGradient.tsx',
  playgroundLink: 'https://play.tailwindcss.com/VsP8U6WLvK',
  source: (
    <button className='relative overflow-clip rounded-lg px-6 py-3 text-slate-50 before:absolute before:bottom-0 before:left-0 before:h-full before:w-[300%] before:-translate-x-2/4 before:bg-gradient-to-tr before:from-sky-500 before:via-purple-500 before:to-pink-500 before:transition-transform before:duration-500 before:ease-in-out hover:before:-translate-x-0'>
      <span className='relative text-slate-50'>Gradient</span>
    </button>
  ),
};

export default ButtonGradient;
