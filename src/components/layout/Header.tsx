import { ExternalLink } from '~/components/atoms';

const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 pt-5 sm:px-6 md:px-8 lg:pt-8'>
      <h2 className='text-xl font-medium'>mini</h2>

      <ul>
        <li>
          <ExternalLink
            className='text-sm font-medium text-slate-700 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400'
            href='https://github.com/codingcodax'
          >
            GitHub
          </ExternalLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
