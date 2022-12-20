import type { Icon } from '~/types/icon';

const TriangleSquareCircle = ({ className }: Icon) => {
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
      <path d='M12 3l-4 7h8z'></path>
      <circle cx='17' cy='17' r='3'></circle>
      <rect height='6' rx='1' width='6' x='4' y='14'></rect>
    </svg>
  );
};

export default TriangleSquareCircle;
