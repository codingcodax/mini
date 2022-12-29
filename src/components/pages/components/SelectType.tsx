import { RadioGroup } from '@headlessui/react';

import SnippetTypes from '~/data/snippetTypes';
import type { SnippetType } from '~/types/snippet';

interface SelectTypeProps {
  selected: SnippetType | undefined;
  setSelected: React.Dispatch<React.SetStateAction<SnippetType | undefined>>;
}

const SelectType = ({ selected, setSelected }: SelectTypeProps) => {
  return (
    <RadioGroup
      as='nav'
      className='mx-auto mt-16 w-[calc(100vw_-_2rem)] max-w-screen-lg overflow-auto'
      value={selected}
      onChange={setSelected}
    >
      <RadioGroup.Label className='sr-only'>Snippets type</RadioGroup.Label>
      <ul className='grid grid-cols-[repeat(6,_4rem)] gap-10 sm:w-fit'>
        {SnippetTypes.map((snippetType) => (
          <RadioGroup.Option
            key={snippetType.name}
            as='li'
            className='focus:outline-none'
            value={snippetType}
          >
            <button
              className='flex w-full min-w-[4rem] flex-col items-center text-sm font-semibold text-slate-300 focus-within:text-sky-500 focus:outline-none ui-checked:text-sky-500 ui-not-checked:hover:text-slate-400 dark:text-slate-600 dark:focus-within:text-sky-400 dark:ui-checked:text-sky-400 dark:ui-not-checked:hover:text-slate-500'
              type='button'
            >
              {snippetType.icon}
              {snippetType.name}
            </button>
          </RadioGroup.Option>
        ))}
      </ul>
    </RadioGroup>
  );
};

export default SelectType;
