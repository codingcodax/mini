import type { Snippet } from '~/types/snippet';

const LinkShowUnderlineLeftLeft: Snippet = {
  title: 'Link Show Underline Left Left',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkShowUnderlineLeftLeft.tsx',
  playgroundLink: 'https://play.tailwindcss.com/lkfjZlDmbA',
  source: (
    <a className='relative inline-block text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-slate-50 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-0'>
      Left to left
    </a>
  ),
};

export default LinkShowUnderlineLeftLeft;
