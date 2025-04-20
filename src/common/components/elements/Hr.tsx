import React from 'react';

type HrProps = {
  className?: string;
  [propName: string]: string | undefined;
};

const Hr = ({ className = '', ...others }: HrProps) => {
  return (
    <div
      className={`my-4 border-t border-gray-200 dark:border-[#4D4D4D] ${className}`}
      data-testid="breakline"
      {...others}
    ></div>
  );
};

export default Hr;
