import ReactDOMServer from 'react-dom/server';
import { Menu } from '@headlessui/react';

import type { Snippet as SnippetType } from '~/types/snippet';
import { Icons } from '~/components/atoms';
import copyToClipboard from '~/utils/copyToClipboard';

type SnippetProps = SnippetType;

const Snippet = ({
  githubLink,
  playgroundLink,
  source,
  animation,
}: SnippetProps) => {
  const copySource = () =>
    copyToClipboard(ReactDOMServer.renderToStaticMarkup(source));

  const copyAnimation = () => {
    if (!animation) return;

    copyToClipboard(animation);
  };

  return (
    <li className='relative rounded-lg bg-slate-800 backdrop-blur dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10'>
      <div className='flex h-10 items-center justify-between border-b border-slate-500/30 px-3'>
        <div className='flex space-x-1.5'>
          <div className='h-2 w-2 rounded-full bg-slate-600'></div>
          <div className='h-2 w-2 rounded-full bg-slate-600'></div>
          <div className='h-2 w-2 rounded-full bg-slate-600'></div>
        </div>

        <Menu as='div' className='relative h-6'>
          <Menu.Button className='rounded-lg hover:bg-slate-700/80 dark:hover:bg-slate-800'>
            <Icons.ChevronDown className='h-6 w-6 stroke-slate-600' />
          </Menu.Button>

          <Menu.Items className='absolute right-0 z-40 mt-2 grid w-56 rounded-md bg-slate-800 p-1 shadow-lg backdrop-blur focus:outline-none dark:bg-slate-900 dark:ring-1 dark:ring-inset dark:ring-white/10'>
            <Menu.Item as='button' className='menu-item' onClick={copySource}>
              <Icons.CodeBracket className='menu-icon' /> Copy Source
            </Menu.Item>
            <Menu.Item
              as='button'
              className='menu-item ui-disabled:cursor-not-allowed ui-disabled:opacity-40'
              disabled={animation ? false : true}
              onClick={copyAnimation}
            >
              <Icons.VideoCamera className='menu-icon' />
              Copy Keyframes
            </Menu.Item>
            <div className='my-1 h-px w-full bg-slate-800' />
            <Menu.Item
              as='a'
              className='menu-item'
              href={playgroundLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Icons.Play className='menu-icon' /> Open in Playground
            </Menu.Item>
            <Menu.Item
              as='a'
              className='menu-item'
              href={githubLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Icons.Github className='menu-icon' />
              Open in GitHub
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      <div className='flex h-28 items-center justify-center'>{source}</div>
    </li>
  );
};

export default Snippet;
