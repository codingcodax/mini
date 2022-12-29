import type { Snippet } from '~/types/snippet';

const InputCheckboxSimpleSwitch: Snippet = {
  title: 'Input Checkbox Simple Switch',
  type: 'input',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/InputCheckboxSimpleSwitch.tsx',
  playgroundLink: 'https://play.tailwindcss.com/77K3Cduxtz',
  source: (
    <input
      className='relative h-6 w-11 cursor-pointer appearance-none rounded-full bg-slate-200 transition-colors after:absolute after:top-1 after:h-4 after:w-4 after:translate-x-1 after:rounded-full after:bg-white after:transition-all checked:bg-sky-400 checked:after:translate-x-6'
      type='checkbox'
    />
  ),
};

export default InputCheckboxSimpleSwitch;
