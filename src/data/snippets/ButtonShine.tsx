import type { Snippet } from '~/types/snippet';

const ButtonShine: Snippet = {
  title: 'Button Shine',
  type: 'button',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/ButtonShine.tsx',
  playgroundLink: 'https://play.tailwindcss.com/dbj3ESLKhZ',
  source: (
    <button className='relative overflow-clip rounded-lg bg-sky-400 px-6 py-3 text-white after:absolute after:-top-1/2 after:-bottom-1/2 after:w-5 after:bg-slate-200/40 after:transition-transform after:duration-500 after:ease-in-out after:[transform:translate3d(-525%,0,0)_rotate(35deg)] hover:after:[transform:translate3d(200%,0,0)_rotate(35deg)]'>
      Shine
    </button>
  ),
};

export default ButtonShine;
