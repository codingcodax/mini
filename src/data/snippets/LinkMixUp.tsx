import type { Snippet } from '~/types/snippet';

const LinkMixUp: Snippet = {
  title: 'Link Mix Up',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkMixUp.tsx',
  playgroundLink: 'https://play.tailwindcss.com/VdZAFl8qZM',
  source: (
    <a
      className='relative text-slate-50 after:absolute after:-bottom-[4px] after:-left-[10%] after:h-0 after:w-[120%] after:bg-slate-50 after:mix-blend-exclusion after:transition-all after:duration-300 hover:after:h-[120%]'
      href='#'
    >
      Mix Up
    </a>
  ),
};

export default LinkMixUp;
