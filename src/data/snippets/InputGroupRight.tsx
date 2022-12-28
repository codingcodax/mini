import type { Snippet } from '~/types/snippet';

const InputGroupRight: Snippet = {
  title: 'Input Group Right',
  type: 'input',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/InputGroupRight.tsx',
  playgroundLink: 'https://play.tailwindcss.com/L2d7iLWbPC',
  source: (
    <div className='relative flex h-10 w-44 overflow-clip rounded-lg'>
      <input
        className='peer w-full rounded-l-lg border border-r-0 border-slate-400 bg-slate-50 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none'
        id='email'
        name='email'
        placeholder='jimmy'
        type='text'
      />
      <label
        className='flex items-center rounded-r-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white'
        htmlFor='email'
      >
        @gmail.com
      </label>
    </div>
  ),
};

export default InputGroupRight;
