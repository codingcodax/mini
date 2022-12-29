import type { Snippet } from '~/types/snippet';

const InputCheckboxSimple: Snippet = {
  title: 'Input Checkbox Simple',
  type: 'input',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/InputCheckboxSimple.tsx',
  playgroundLink: 'https://play.tailwindcss.com/GOsCnljiS',
  source: (
    <div className='relative'>
      <input
        className='peer absolute h-0 w-0 appearance-none'
        id='simple'
        type='checkbox'
      />
      <label
        className="text-slate-50 before:mr-2 before:inline-block before:h-4 before:w-4 before:rounded before:border before:border-slate-400 before:bg-[url('https://mini.codingcodax.dev/images/simple-check.svg')] before:bg-[length:0px] before:bg-center before:bg-no-repeat before:align-middle before:transition-all before:duration-300 before:ease-in-out peer-checked:before:bg-sky-400 peer-checked:before:bg-[length:11px]"
        htmlFor='simple'
      >
        Simple
      </label>
    </div>
  ),
};

export default InputCheckboxSimple;
