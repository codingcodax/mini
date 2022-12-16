import { type NextPage } from 'next';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <main className='mx-auto mt-20 px-4 sm:px-6 md:px-8'>
      <h1 className='grid text-center font-extrabold'>
        <span className='text-2xl sm:text-3xl'>The ultimate</span>
        <span className='text-4xl md:text-6xl'>micro components</span>
        <span className='mt-3 text-2xl sm:text-3xl'>with tailwindcss</span>
      </h1>

      <p className='mt-6 max-w-3xl text-center'>
        An awesome collection of{' '}
        <code className='font-mono font-medium text-sky-500 dark:text-sky-400'>
          buttons
        </code>
        ,{' '}
        <code className='font-mono font-medium text-sky-500 dark:text-sky-400'>
          loaders
        </code>
        ,{' '}
        <code className='font-mono font-medium text-sky-500 dark:text-sky-400'>
          inputs
        </code>{' '}
        and more built with tailwindcss, you can copy the source and open in
        tailwindcss playgroud.
      </p>

      <div className='mt-6 flex justify-center sm:mt-10'>
        <Link
          className='inline-block w-full rounded-lg bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-slate-700 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto'
          href='/components'
        >
          Browse components{' '}
          <span className='hidden text-slate-400 dark:text-sky-800 sm:inline'>
            &rarr;
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Home;
