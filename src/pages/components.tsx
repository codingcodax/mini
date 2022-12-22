import { useMemo, useState } from 'react';
import type { NextPage } from 'next';

import { Steps, Snippet, SelectType } from '~/components/pages/components';
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

      <SelectType selected={typeSelected} setSelected={setTypeSelected} />

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
