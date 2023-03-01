import type { Snippet } from '~/types/snippet';

const LinkUnderlineLeftRight: Snippet = {
  title: 'Link Underline Left Right',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkUnderlineLeftRight.tsx',
  playgroundLink: 'https://play.tailwindcss.com/lTPdvpkpCX',
  source: (
    <a className='relative inline-block text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-100'>
      Left to right
    </a>
  ),
};

export default LinkUnderlineLeftRight;
