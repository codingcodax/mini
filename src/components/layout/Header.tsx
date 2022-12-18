import { ExternalLink, Icons } from '~/components/atoms';

const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 pt-5 sm:px-6 md:px-8 lg:pt-8'>
      <h2 className='text-xl font-medium'>mini</h2>

      <ul>
        <li>
          <ExternalLink
            className='text-sm font-medium text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
            href='https://github.com/codingcodax'
          >
            <Icons.Github className='h-5 w-5' />
          </ExternalLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
