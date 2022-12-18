import type { Snippet } from '~/types/snippet';

const LinkShowUnderlineLeftRigh: Snippet = {
  title: 'Link Show Underline Left Right',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkShowUnderlineLeftRigh.tsx',
  playgroundLink: 'https://play.tailwindcss.com/BTsk4acndP',
  source: (
    <a
      className='relative inline-block text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-slate-50 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0'
      href='#'
    >
      Left to right
    </a>
  ),
};

export default LinkShowUnderlineLeftRigh;
