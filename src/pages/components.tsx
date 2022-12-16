import type { NextPage } from 'next';

const Components: NextPage = () => {
  return (
    <div className='mx-auto mt-10 px-4 sm:px-6 md:px-8'>
      <main className='max-w-6xl'>
        <h1 className='grid text-center text-3xl font-semibold sm:text-4xl'>
          <span>Beautiful micro components</span>
          <span>crafted with Tailwind CSS.</span>
        </h1>

        <ol className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr_auto_1fr_auto]'>
          <li>
            <h2 className='font-semibold'>1. Find</h2>
            <p className='mt-2'>
              Search for the component your need and interact with it.
            </p>
          </li>
          <div className='h-px w-full bg-slate-300 dark:bg-slate-800 lg:h-full lg:w-px' />
          <li>
            <h2 className='font-semibold'>2. Copy</h2>
            <p className='mt-2'>
              Right-click on the component to copy the source or keyframes.
            </p>
          </li>
          <div className='h-px w-full bg-slate-300 dark:bg-slate-800 lg:h-full lg:w-px' />
          <li>
            <h2 className='font-semibold'>3. Paste</h2>
            <p className='mt-2'>
              Every component is built entirely with tailwindcss, so you can
              customize them easily.
            </p>
          </li>
        </ol>
      </main>
    </div>
  );
};

export default Components;
