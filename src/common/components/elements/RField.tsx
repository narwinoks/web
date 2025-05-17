import React, { ReactNode } from 'react';

interface RFieldProps {
  children: ReactNode;
}
const RField = ({ children }: RFieldProps) => {
  return <div className="mb-4">{children}</div>;
};

export default RField;
