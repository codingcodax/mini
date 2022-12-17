import type { Snippet } from '~/types/snippet';

const LinkUnderlineRightLeft: Snippet = {
  title: 'Link Underline Right Left',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkUnderlineRightLeft.tsx',
  playgroundLink: 'https://play.tailwindcss.com/gFtCzFOysn',
  source: (
    <a
      className='relative inline-block text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100'
      href='#'
    >
      Hover over me
    </a>
  ),
};

export default LinkUnderlineRightLeft;
