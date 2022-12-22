import type { Snippet } from '~/types/snippet';

const LinkWavyRight: Snippet = {
  title: 'Link Wavy Right',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkWavyRight.tsx',
  playgroundLink: 'https://play.tailwindcss.com/1qWAzPnCx4',
  source: (
    <a
      className="relative scale-x-100 text-slate-50 transition-colors duration-300 before:absolute before:left-0 before:-bottom-3 before:h-full before:w-full before:origin-right before:scale-x-0 before:animate-[waving_3s_ease-in-out_infinite] before:bg-[url('https://mini.codingcodax.dev/images/wavy.svg')] before:bg-[length:80px_80px] before:bg-[left_center] before:bg-repeat-x before:transition-transform before:duration-300 hover:text-sky-400 hover:before:origin-left hover:before:scale-x-100"
      href=''
    >
      Left to right
    </a>
  ),
  animation: `keyframes: {
        waving: {
          to: { 'backgroud-position': '80px 50%, 150px 50%' },
        },
      }`,
};

export default LinkWavyRight;
