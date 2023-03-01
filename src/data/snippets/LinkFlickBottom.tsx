import type { Snippet } from '~/types/snippet';

const LinkFlickBottom: Snippet = {
  title: 'Link Flick Bottom',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkFlickBottom.tsx',
  playgroundLink: 'https://play.tailwindcss.com/hLjBPOpt1Q',
  source: (
    <a className='group relative overflow-hidden text-slate-50'>
      <span className='invisible'>Flick bottom</span>
      <span className='absolute top-0 left-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-full'>
        Flick bottom
      </span>
      <span className='absolute top-0 left-0 -translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0'>
        Flick bottom
      </span>
    </a>
  ),
};

export default LinkFlickBottom;
