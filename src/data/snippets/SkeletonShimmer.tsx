import type { Snippet } from '~/types/snippet';

const SkeletonShimmer: Snippet = {
  title: 'Skeleton Shimmer',
  type: 'other',
  githubLink: 'https://play.tailwindcss.com/bCU8bI5eff?file=config',
  playgroundLink: 'https://play.tailwindcss.com/bCU8bI5eff',
  source: (
    <div className='h-12 w-40 animate-[shimmer_8s_linear_infinite] rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:400%_100%]'></div>
  ),
  animation: `keyframes: {
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      }`,
};

export default SkeletonShimmer;
