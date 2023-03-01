import type { Snippet } from '~/types/snippet';

const LinkShowUnderlineOutsideCenter: Snippet = {
  title: 'Link Show Underline Outside Center',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkShowUnderlineOutsideCenter.tsx',
  playgroundLink: 'https://play.tailwindcss.com/9TrRqNLnl2',
  source: (
    <a className='relative inline-block text-slate-50 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-bottom-left before:-translate-x-0 before:scale-x-50 before:bg-gray-200 before:transition-transform before:duration-300 before:ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:translate-x-0 after:scale-x-50 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-0 hover:after:origin-bottom-right hover:after:scale-x-0'>
      Outside to center
    </a>
  ),
};

export default LinkShowUnderlineOutsideCenter;
