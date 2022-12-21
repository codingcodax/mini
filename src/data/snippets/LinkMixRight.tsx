import type { Snippet } from '~/types/snippet';

const LinkMixRight: Snippet = {
  title: 'Link Mix Right',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkMixRight.tsx',
  playgroundLink: 'https://play.tailwindcss.com/fw2BDeK1dR',
  source: (
    <a
      className='relative text-slate-50 after:absolute after:-bottom-[20%] after:-left-[10%] after:h-[140%] after:w-0 after:bg-slate-50 after:mix-blend-exclusion after:transition-all after:duration-300 hover:after:w-[120%]'
      href='#'
    >
      Mix right
    </a>
  ),
};

export default LinkMixRight;
