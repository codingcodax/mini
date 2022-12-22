import type { Snippet } from '~/types/snippet';

const SkeletonSimple: Snippet = {
  title: 'Skeleton Simple',
  type: 'other',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/SkeletonSimple.tsx',
  playgroundLink: 'https://play.tailwindcss.com/qdmVRcnCWu',
  source: (
    <div className='h-12 w-40 animate-pulse rounded-lg bg-gray-800'></div>
  ),
};

export default SkeletonSimple;
