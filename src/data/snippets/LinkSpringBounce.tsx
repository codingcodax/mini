import type { Snippet } from '~/types/snippet';

const LinkSpringBounce: Snippet = {
  title: 'Link Spring Bounce',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkSpringBounce.tsx',
  playgroundLink: 'https://play.tailwindcss.com/UtCdAqC86e',
  source: (
    <a
      className='relative text-sky-400 after:absolute after:left-3 after:-bottom-1 after:h-[calc(100%_-_8px)] after:w-[calc(100%_-_4px)] after:bg-sky-400/25 after:transition-all after:duration-300 after:ease-[cubic-bezier(0.25,_0.1,_0,_2.05)] hover:after:left-0 hover:after:-bottom-[2px] hover:after:h-full hover:after:w-full'
      href='#'
    >
      Spring bounce
    </a>
  ),
};

export default LinkSpringBounce;
