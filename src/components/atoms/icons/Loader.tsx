import type { Icon } from '~/types/icon';

const Link = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h24v24H0z' fill='none' stroke='none'></path>
      <path d='M12 3a9 9 0 1 0 9 9'></path>
    </svg>
  );
};

export default Link;
