import type { Snippet } from '~/types/snippet';

const LoaderDobleSpinner: Snippet = {
  title: 'Loader Spinner',
  type: 'loader',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LoaderDobleSpinner.tsx',
  playgroundLink: 'https://play.tailwindcss.com/WaxL0TUQ6n',
  source: (
    <div className='h-10 w-10 animate-[spin_800ms_ease_infinite] rounded-full border-4 border-slate-50/25 border-l-slate-50 border-r-slate-50' />
  ),
};

export default LoaderDobleSpinner;
