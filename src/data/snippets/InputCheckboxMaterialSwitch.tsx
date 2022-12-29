import type { Snippet } from '~/types/snippet';

const InputCheckboxMaterialSwitch: Snippet = {
  title: 'Input Checkbox Material Switch',
  type: 'input',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/InputCheckboxMaterialSwitch.tsx',
  playgroundLink: 'https://play.tailwindcss.com/OxrZLXiqxV',
  source: (
    <input
      className='relative h-[14px] w-11 cursor-pointer appearance-none rounded-full bg-slate-400 transition-colors before:absolute before:-top-[3px] before:h-5 before:w-5 before:translate-x-6 before:scale-0 before:rounded-full before:bg-sky-400 after:absolute after:-top-[3px] after:h-5 after:w-5 after:translate-x-0 after:rounded-full after:bg-white after:transition-all after:duration-200 checked:bg-sky-200 checked:before:scale-[260%] checked:before:opacity-0 checked:before:transition-all checked:before:duration-[400ms] checked:after:translate-x-6 checked:after:bg-sky-400'
      type='checkbox'
    />
  ),
};

export default InputCheckboxMaterialSwitch;
