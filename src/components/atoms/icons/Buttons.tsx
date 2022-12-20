import type { Icon } from '~/types/icon';

const Buttons = ({ className }: Icon) => {
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
      <rect height='12' rx='2' width='12' x='8' y='8'></rect>
      <path d='M8 14.5l6.492 -6.492'></path>
      <path d='M13.496 20.004l6.504 -6.504l-6.504 6.504z'></path>
      <path d='M8.586 19.414l10.827 -10.827'></path>
      <path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'></path>
    </svg>
  );
};

export default Buttons;
