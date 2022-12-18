import type { Snippet } from '~/types/snippet';

const LinkShowHighlightBottomFull: Snippet = {
  title: 'Link Show Highlight Bottom Full',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkShowHighlightBottomFull.tsx',
  playgroundLink: 'https://play.tailwindcss.com/1pvLlvaen8',
  source: (
    <a
      className='relative text-slate-50 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-sky-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-y-100'
      href='#'
    >
      <span className='relative'>Bottom to full</span>
    </a>
  ),
};

export default LinkShowHighlightBottomFull;
