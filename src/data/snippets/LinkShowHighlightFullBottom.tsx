import type { Snippet } from '~/types/snippet';

const LinkShowHighlightFullBottom: Snippet = {
  title: 'Link Show Highlight Full Bottom',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkShowHighlightFullBottom.tsx',
  playgroundLink: 'https://play.tailwindcss.com/Ju2xqzX6ur',
  source: (
    <a
      className='relative text-slate-50 before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-100 before:bg-sky-500 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-y-[0.35]'
      href='#'
    >
      <span className='relative'>Full to bottom</span>
    </a>
  ),
};

export default LinkShowHighlightFullBottom;
