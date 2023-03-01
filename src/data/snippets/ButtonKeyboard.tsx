import type { Snippet } from '~/types/snippet';

const ButtonKeyboard: Snippet = {
  title: 'Button Keyboard',
  type: 'button',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/ButtonKeyboard.tsx',
  playgroundLink: 'https://play.tailwindcss.com/s6NsjWFtKM',
  source: (
    <button className='rounded-lg border-b-4 border-b-slate-400 bg-slate-50 px-6 py-3 text-black transition-[border] duration-200 ease-in-out hover:border-b-0'>
      Keyboard Button
    </button>
  ),
};

export default ButtonKeyboard;
