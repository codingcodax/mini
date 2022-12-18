import type { Snippet } from '~/types/snippet';

const LinkFlickUp: Snippet = {
  title: 'Link Flick Up',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkFlickUp.tsx',
  playgroundLink: 'https://play.tailwindcss.com/guboPjzAw9',
  source: (
    <a className='group relative overflow-hidden text-slate-50' href='#'>
      <span className='invisible'>Hover over me</span>
      <span className='absolute top-0 left-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full'>
        Hover over me
      </span>
      <span className='absolute top-0 left-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0'>
        Hover over me
      </span>
    </a>
  ),
};

export default LinkFlickUp;
