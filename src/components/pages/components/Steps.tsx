const Steps = () => {
  return (
    <ol className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr_auto_1fr_auto]'>
      <li>
        <h2 className='font-semibold'>1. Find</h2>
        <p className='mt-2'>
          Search for the component your need and interact with it.
        </p>
      </li>
      <div className='h-px w-full bg-slate-300 dark:bg-slate-800 lg:h-full lg:w-px' />
      <li>
        <h2 className='font-semibold'>2. Copy</h2>
        <p className='mt-2'>
          Right-click on the meatballs menu to copy the source or keyframes.
        </p>
      </li>
      <div className='h-px w-full bg-slate-300 dark:bg-slate-800 lg:h-full lg:w-px' />
      <li>
        <h2 className='font-semibold'>3. Paste</h2>
        <p className='mt-2'>
          Every component is built entirely with tailwindcss, so you can
          customize them easily.
        </p>
      </li>
    </ol>
  );
};

export default Steps;
