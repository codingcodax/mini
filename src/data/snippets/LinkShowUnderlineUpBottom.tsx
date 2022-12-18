import type { Snippet } from '~/types/snippet';

const LinkShowUnderlineUpBottom: Snippet = {
  title: 'Link Show Underline Up Bottom',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkShowUnderlineUpBottom.tsx',
  playgroundLink: 'https://play.tailwindcss.com/npApwGLh1o',
  source: (
    <a
      className='relative text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-0 after:bg-slate-50 after:opacity-100 after:transition after:duration-200 after:ease-in-out hover:after:translate-y-1 hover:after:opacity-0'
      href='#'
    >
      Up to Bottom
    </a>
  ),
};

export default LinkShowUnderlineUpBottom;
