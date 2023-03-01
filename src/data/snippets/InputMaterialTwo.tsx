import type { Snippet } from '~/types/snippet';

const InputMaterialTwo: Snippet = {
  title: 'Input Material Two',
  type: 'input',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/InputMaterialTwo.tsx',
  playgroundLink: 'https://play.tailwindcss.com/yvr5IenL94',
  source: (
    <div className='relative text-slate-50'>
      <input
        className='peer h-10 w-36 border-b-2 border-slate-600 bg-transparent placeholder-transparent transition-colors duration-200 ease-in-out focus:border-sky-400 focus:outline-none'
        id='name-two'
        name='name'
        placeholder='Name'
        type='text'
      />
      <label
        className='absolute left-0 -top-3 cursor-text text-sm text-slate-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-sky-400'
        htmlFor='name-two'
      >
        Name
      </label>
    </div>
  ),
};

export default InputMaterialTwo;
