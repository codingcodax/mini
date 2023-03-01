import type { Snippet } from '~/types/snippet';

const LinkSwing: Snippet = {
  title: 'Link Swing',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkSwing.tsx',
  playgroundLink: 'https://play.tailwindcss.com/Fo1uaEVKzz',
  source: <a className='text-slate-50 hover:animate-swing'>Swing</a>,
  animation: `keyframes: {
        swing: {
          '15%': { transform: 'translateX(5px)' },
          '30%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(3px)' },
          '80%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        swing: 'swing 1s ease 1',
      }`,
};

export default LinkSwing;
