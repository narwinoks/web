import React from 'react';

import Card from '@/common/components/elements/Card';
interface ItemViewProps {
  label: string;
  value: string;
}
const ItemView = ({ label, value }: ItemViewProps) => {
  return (
    <Card>
      <h1 className="light:text-borderLight text-base text-borderDark">
        {label}
      </h1>
      <h2 className="text-lg">{value}</h2>
    </Card>
  );
};

export default ItemView;
