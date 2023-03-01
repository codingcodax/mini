import type { Snippet } from '~/types/snippet';

const LinkUnderlineBottomUp: Snippet = {
  title: 'Link Underline Bottom Up',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkUnderlineBottomUp.tsx',
  playgroundLink: 'https://play.tailwindcss.com/BdWTh3bz61',
  source: (
    <a className='relative text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-slate-50 after:opacity-0 after:transition after:duration-200 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100'>
      Bottom to Up
    </a>
  ),
};

export default LinkUnderlineBottomUp;
