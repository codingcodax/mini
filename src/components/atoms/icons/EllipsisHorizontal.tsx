import type { Icon } from '~/types/icon';

const EllipsisHorizontal = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default EllipsisHorizontal;
