import type { NextPage } from 'next';

import { Steps, Snippet } from '~/components/pages/components';
import Snippets from '~/data/snippets';

const Components: NextPage = () => {
  return (
    <div className='mx-auto mt-10 px-4 sm:px-6 md:px-8'>
      <main className='max-w-6xl'>
        <h1 className='grid text-center text-3xl font-semibold sm:text-4xl'>
          <span>Beautiful micro components</span>
          <span>crafted with Tailwind CSS.</span>
        </h1>

        <Steps />
      </main>

      <section className='mx-auto mt-20 max-w-screen-lg'>
        <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {Snippets.map((snippet) => (
            <Snippet key={snippet.title} {...snippet} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Components;
