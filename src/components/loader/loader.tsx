import React from 'react';

export const Loader = () => {
  let circleCommonClasses = 'h-2.5 w-2.5 bg-indigo-600   rounded-full';

  return (
    <div className='flex justify-center'>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} animate-bounce`}></div>
    </div>
  );
};