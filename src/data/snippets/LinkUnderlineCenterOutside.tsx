import type { Snippet } from '~/types/snippet';

const LinkUnderlineCenterOutside: Snippet = {
  title: 'Link Underline Center Outside',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkUnderlineCenterOutside.tsx',
  playgroundLink: 'https://play.tailwindcss.com/32eo1KcOT3',
  source: (
    <a
      className='relative inline-block text-slate-50 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-bottom-right before:-translate-x-1/2 before:scale-x-0 before:bg-gray-200 before:transition-transform before:duration-300 before:ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:translate-x-1/2 after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:before:origin-bottom-right hover:before:scale-x-50 hover:after:origin-bottom-left hover:after:scale-x-50'
      href='#'
    >
      Hover over me
    </a>
  ),
};

export default LinkUnderlineCenterOutside;
