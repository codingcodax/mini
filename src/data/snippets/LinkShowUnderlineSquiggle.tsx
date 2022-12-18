import type { Snippet } from '~/types/snippet';

const LinkShowUnderlineSquiggle: Snippet = {
  title: 'Link Show Underline Squiggle',
  type: 'link',
  githubLink:
    'https://github.com/codingcodax/mini/tree/main/src/data/snippets/LinkShowUnderlineSquiggle.tsx',
  playgroundLink: 'https://play.tailwindcss.com/BNBX2giPex',
  source: (
    <a
      className="text-slate-50 underline underline-offset-[3px] hover:bg-[url('https://mini.codingcodax.dev/images/squiggle.svg')] hover:no-underline"
      href='#'
    >
      squiggle
    </a>
  ),
};

export default LinkShowUnderlineSquiggle;
