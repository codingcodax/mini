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
      <path d='M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3'></path>
      <path d='M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3'></path>
      <path d='M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7'></path>
      <path d='M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1'></path>
      <path d='M17 12h.01'></path>
      <path d='M13 12h.01'></path>
    </svg>
  );
};

export default Link;
