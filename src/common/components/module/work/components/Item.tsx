import React from 'react';
import { FiMapPin } from 'react-icons/fi';

import Hr from '@/common/components/elements/Hr';
import { WORK_ITEM } from '@/common/constant/work';
import { TypePropsWork } from '@/common/types/work';

const Item = () => {
  return (
    <div className="pt-5">
      {WORK_ITEM.map((item: TypePropsWork, index: number) => {
        return (
          <React.Fragment key={index}>
            <div className="my-2 w-full">
              <h1 className="text-xl font-medium">{item.company}</h1>
              <div className="mt-2 flex items-center gap-4">
                <FiMapPin size={16} />
                <h3 className="text-sm">{item.location}</h3>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-md">{item.position}</h3>
                <h3 className="text-md">{item.date}</h3>
              </div>
              <div className="mt-2">
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
            <Hr></Hr>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Item;
