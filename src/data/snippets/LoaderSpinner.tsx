import type { Snippet } from '~/types/snippet';

const LoaderSpinner: Snippet = {
  title: 'Loader Spinner',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderSpinner.tsx',
  playgroundLink: 'https://play.tailwindcss.com/bUGsdDJW7t',
  source: (
    <svg
      className='h-8 w-8 animate-spin text-slate-50'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        fill='currentColor'
      ></path>
    </svg>
  ),
};

export default LoaderSpinner;
