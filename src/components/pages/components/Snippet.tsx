import { Menu } from '@headlessui/react';

import type { Snippet as SnippetType } from '~/types/snippet';
import { Icons } from '~/components/atoms';

type SnippetProps = SnippetType;

const Snippet = ({
  githubLink,
  playgroundLink,
  source,
  animation,
}: SnippetProps) => {
  return (
    <li className='relative rounded-lg bg-slate-800 ring-1 ring-inset backdrop-blur dark:bg-slate-900/70 dark:ring-white/10'>
      <div className='flex h-10 items-center justify-between border-b border-slate-500/30 px-3'>
        <div className='flex space-x-1.5'>
          <div className='h-2 w-2 rounded-full bg-slate-600'></div>
          <div className='h-2 w-2 rounded-full bg-slate-600'></div>
          <div className='h-2 w-2 rounded-full bg-slate-600'></div>
        </div>

        <Menu as='div' className='relative h-8'>
          <Menu.Button className='rounded-lg hover:bg-slate-800'>
            <Icons.EllipsisHorizontal className='h-8 w-8 fill-slate-600' />
          </Menu.Button>

          <Menu.Items className='absolute right-0 z-40 mt-2 grid w-56 rounded-md bg-slate-900 p-1 shadow-lg ring-1 ring-inset ring-white/10 backdrop-blur focus:outline-none'>
            <Menu.Item as='button' className='menu-item'>
              <Icons.CodeBracket className='menu-icon' /> Copy Source
            </Menu.Item>
            <Menu.Item
              as='button'
              className='menu-item ui-disabled:cursor-not-allowed ui-disabled:opacity-40'
              disabled={animation ? false : true}
            >
              <Icons.VideoCamera className='menu-icon' />
              Copy Keyframes
            </Menu.Item>
            <div className='my-1 h-px w-full bg-slate-300 dark:bg-slate-800' />
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

      <div className='flex h-24 items-center justify-center'>{source}</div>
    </li>
  );
};

export default Snippet;
