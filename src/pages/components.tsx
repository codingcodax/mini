import { useMemo, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import type { NextPage } from 'next';

import { Steps, Snippet } from '~/components/pages/components';
import Snippets from '~/data/snippets';
import SnippetTypes from '~/data/snippetTypes';

const Components: NextPage = () => {
  const [typeSelected, setTypeSelected] = useState(SnippetTypes[0]);

  const filteredSnippets = useMemo(() => {
    if (typeSelected?.type === 'all') return Snippets;
    return Snippets.filter((snippet) => snippet.type === typeSelected?.type);
  }, [typeSelected]);

  return (
    <div className='mx-auto mt-10 px-4 sm:px-6 md:px-8'>
      <main className='max-w-6xl'>
        <h1 className='grid text-center text-3xl font-semibold sm:text-4xl'>
          <span>Beautiful micro components</span>
          <span>crafted with Tailwind CSS.</span>
        </h1>

        <Steps />
      </main>

      <RadioGroup
        as='nav'
        className='mx-auto mt-16 w-[calc(100vw_-_2rem)] max-w-screen-lg overflow-auto'
        value={typeSelected}
        onChange={setTypeSelected}
      >
        <RadioGroup.Label className='sr-only'>Snippets type</RadioGroup.Label>
        <ul className='grid grid-cols-[repeat(6,_4rem)] gap-10 sm:w-fit'>
          {SnippetTypes.map((snippetType) => (
            <RadioGroup.Option
              key={snippetType.name}
              as='li'
              value={snippetType}
            >
              <button
                className='flex w-full min-w-[4rem] flex-col items-center text-sm font-semibold text-slate-300 ui-checked:text-sky-500 ui-not-checked:hover:text-slate-400 dark:text-slate-600 dark:ui-checked:text-sky-500 dark:ui-not-checked:hover:text-slate-500'
                type='button'
              >
                {snippetType.icon}
                {snippetType.name}
              </button>
            </RadioGroup.Option>
          ))}
        </ul>
      </RadioGroup>

      <section className='mx-auto mt-10 max-w-screen-lg'>
        <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredSnippets.map((snippet) => (
            <Snippet key={snippet.title} {...snippet} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Components;
