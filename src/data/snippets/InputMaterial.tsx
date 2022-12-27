import type { Snippet } from '~/types/snippet';

const InputMaterial: Snippet = {
  title: 'Input Material',
  type: 'input',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/InputMaterial.tsx',
  playgroundLink: 'https://play.tailwindcss.com/Uv4YeMNIBI',
  source: (
    <div className='relative bg-slate-900 text-slate-50'>
      <input
        className='peer h-10 w-36 rounded-lg bg-transparent px-2 placeholder-transparent ring-2 ring-slate-500 focus:outline-none focus:ring-sky-400'
        id='name'
        name='name'
        placeholder='Name'
        type='text'
      />
      <label
        className='absolute left-0 mx-1 cursor-text bg-inherit px-1 text-slate-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-sky-400'
        htmlFor='name'
      >
        Name
      </label>
    </div>
  ),
};

export default InputMaterial;
