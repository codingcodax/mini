import type { SnippetType } from '~/types/snippet';
import { Icons } from '~/components/atoms';

const SnippetTypes: SnippetType[] = [
  {
    name: 'All',
    type: 'all',
    icon: <Icons.TriangleSquareCircle className='mb-6 h-12 w-12 stroke-1' />,
  },
  {
    name: 'Links',
    type: 'link',
    icon: <Icons.Link className='mb-6 h-12 w-12 stroke-1' />,
  },
  {
    name: 'Buttons',
    type: 'button',
    icon: <Icons.Buttons className='mb-6 h-12 w-12 stroke-1' />,
  },
  {
    name: 'Inputs',
    type: 'input',
    icon: <Icons.Forms className='mb-6 h-12 w-12 stroke-1' />,
  },
  {
    name: 'Loaders',
    type: 'loader',
    icon: <Icons.Loader className='mb-6 h-12 w-12 stroke-1' />,
  },
  {
    name: 'Others',
    type: 'other',
    icon: <Icons.Apps className='mb-6 h-12 w-12 stroke-1' />,
  },
];

export default SnippetTypes;
