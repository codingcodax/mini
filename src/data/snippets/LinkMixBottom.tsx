import type { Snippet } from '~/types/snippet';

const LinkMixBottom: Snippet = {
  title: 'Link Mix Bottom',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkMixBottom.tsx',
  playgroundLink: 'https://play.tailwindcss.com/3EhAyJgY5s',
  source: (
    <a
      className='relative text-slate-50 after:absolute after:-top-[4px] after:-left-[10%] after:h-0 after:w-[120%] after:bg-slate-50 after:mix-blend-exclusion after:transition-all after:duration-300 hover:after:h-[120%]'
      href='#'
    >
      Mix bottom
    </a>
  ),
};

export default LinkMixBottom;
