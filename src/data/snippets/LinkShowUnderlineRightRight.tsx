import type { Snippet } from '~/types/snippet';

const LinkShowUnderlineRightRight: Snippet = {
  title: 'Link Show Underline Right Right',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkShowUnderlineRightRight.tsx',
  playgroundLink: 'https://play.tailwindcss.com/6n4TIH7fGM',
  source: (
    <a
      className='relative inline-block text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-100 after:bg-slate-50 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0'
      href='#'
    >
      Right to right
    </a>
  ),
};

export default LinkShowUnderlineRightRight;
