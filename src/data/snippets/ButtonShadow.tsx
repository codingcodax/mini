import type { Snippet } from '~/types/snippet';

const ButtonShadow: Snippet = {
  title: 'Button Shadow',
  type: 'button',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/ButtonShadow.tsx',
  playgroundLink: 'https://play.tailwindcss.com/EQHnsNLDRx',
  source: (
    <button className='rounded-lg border-slate-400 bg-slate-50 px-6 py-3 text-black transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:shadow-[3px_3px_black,4px_4px_black] hover:shadow-sky-400'>
      Shadow Button
    </button>
  ),
};

export default ButtonShadow;
