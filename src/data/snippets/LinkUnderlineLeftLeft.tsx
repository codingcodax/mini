import type { Snippet } from '~/types/snippet';

const LinkUnderlineLeftLeft: Snippet = {
  title: 'Link Underline Left Left',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkUnderlineLeftLeft.tsx',
  playgroundLink: 'https://play.tailwindcss.com/wQBjrZER0p',
  source: (
    <div className='relative inline-block cursor-pointer text-slate-50 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100'>
      Hover over me
    </div>
  ),
};

export default LinkUnderlineLeftLeft;
