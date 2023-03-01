import type { Snippet } from '~/types/snippet';

const LinkMixLeft: Snippet = {
  title: 'Link Mix Left',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkMixLeft.tsx',
  playgroundLink: 'https://play.tailwindcss.com/RPcqED7uIL',
  source: (
    <a className='relative text-slate-50 after:absolute after:-bottom-[20%] after:-right-[10%] after:h-[140%] after:w-0 after:bg-slate-50 after:mix-blend-exclusion after:transition-all after:duration-300 hover:after:w-[120%]'>
      Mix left
    </a>
  ),
};

export default LinkMixLeft;
