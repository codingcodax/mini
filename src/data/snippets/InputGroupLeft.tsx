import type { Snippet } from '~/types/snippet';

const InputGroupLeft: Snippet = {
  title: 'Input Group Left',
  type: 'input',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/InputGroupLeft.tsx',
  playgroundLink: 'https://play.tailwindcss.com/T9d3zxArAX',
  source: (
    <div className='relative flex h-10 w-44 flex-row-reverse overflow-clip rounded-lg'>
      <input
        className='peer w-full rounded-r-lg border border-slate-400 bg-slate-50 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none'
        id='domain'
        name='domain'
        placeholder='domain.dev'
        type='text'
      />
      <label
        className='flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white'
        htmlFor='domain'
      >
        https://
      </label>
    </div>
  ),
};

export default InputGroupLeft;
