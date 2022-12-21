import type { Icon } from '~/types/icon';

const Apps = ({ className }: Icon) => {
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
      <rect height='6' rx='1' width='6' x='4' y='4'></rect>
      <rect height='6' rx='1' width='6' x='4' y='14'></rect>
      <rect height='6' rx='1' width='6' x='14' y='14'></rect>
      <line x1='14' x2='20' y1='7' y2='7'></line>
      <line x1='17' x2='17' y1='4' y2='10'></line>
    </svg>
  );
};

export default Apps;
