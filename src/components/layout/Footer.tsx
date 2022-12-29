import { ExternalLink } from '~/components/atoms';

const Footer = () => {
  return (
    <footer className='mt-16 px-4 pb-5 sm:px-6 md:px-8 lg:pb-8'>
      <div className='mb-10 h-px w-full bg-slate-300 dark:bg-slate-800' />
      <p className='text-center'>
        Handcrafted with <span className='font-mono dark:hidden'>🖤</span>{' '}
        <span className='hidden font-mono dark:inline'>🤍</span> by{' '}
        <ExternalLink
          className='font-medium text-slate-900 hover:text-sky-500 dark:text-white dark:hover:text-sky-400'
          href='https://www.codingcodax.dev/'
        >
          @codingcodax
        </ExternalLink>{' '}
        ^_^
      </p>
    </footer>
  );
};

export default Footer;
