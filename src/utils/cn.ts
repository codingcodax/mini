import type { ClassNameValue } from 'tailwind-merge/dist/lib/tw-join';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassNameValue[]) => twMerge(inputs);

export default cn;
