import type { Snippet } from '~/types/snippet';

const LinkArrowRight: Snippet = {
  title: 'Link Arrow Right',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkArrowRight.tsx',
  playgroundLink: 'https://play.tailwindcss.com/mXjl1YPiXO',
  source: (
    <a className='group text-slate-50 transition duration-200 ease-in-out hover:text-sky-400'>
      Hover over me{' '}
      <span
        aria-hidden='true'
        className='inline-block translate-x-0 transition-transform duration-200 ease-in-out group-hover:translate-x-1'
      >
        →
      </span>
    </a>
  ),
};

export default LinkArrowRight;
