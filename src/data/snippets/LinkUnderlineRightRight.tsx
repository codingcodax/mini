import type { Snippet } from '~/types/snippet';

const LinkUnderlineRightRight: Snippet = {
  title: 'Link Underline Right Right',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkUnderlineRightRight.tsx',
  playgroundLink: 'https://play.tailwindcss.com/XH5E3g0ma5',
  source: (
    <a className='relative inline-block text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-100'>
      Right to right
    </a>
  ),
};

export default LinkUnderlineRightRight;
