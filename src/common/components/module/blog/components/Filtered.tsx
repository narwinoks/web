import React, { useEffect, useState } from 'react';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { GrMoreVertical } from 'react-icons/gr';
import { IoIosCode, IoIosOptions } from 'react-icons/io';
import { MdOutlineTerminal } from 'react-icons/md';

import { api } from '@/common/libs/useApi';
import { FilterBlogProps } from '@/common/types/filterBlog';

import Filter from './Filter';
interface FilteredProps {
  setFilter: (filter: string) => void;
  filter: string;
}
const iconMap: IconMap = {
  IoIosOptions: IoIosOptions,
  IoIosCode: IoIosCode,
  AiOutlineAntDesign: AiOutlineAntDesign,
  MdOutlineTerminal: MdOutlineTerminal,
  GrMoreVertical: GrMoreVertical,
};
type IconMap = {
  [key: string]: React.ComponentType<{ size: number }>;
};

const Filtered = ({ setFilter, filter }: FilteredProps) => {
  const [categories, setCategories] = useState<FilterBlogProps[]>([]);
  useEffect(() => {
    api.get('/api/categories').then((response) => {
      const transformedData = response.data.data.map((item: any) => {
        const match = item.icon.match(/<(\w+)/);
        const componentName = match ? match[1] : '';
        const IconComponent = iconMap[componentName];
        return {
          ...item,
          icon: <IconComponent size={20} />,
        };
      });
      setCategories(transformedData);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-2 md:flex">
      <Filter
        label="All"
        value=""
        icon={<IoIosOptions size={20} />}
        filter={filter}
        setFilter={setFilter}
      />
      {categories.map((item: FilterBlogProps, index: number) => (
        <Filter
          label={item.label}
          value={item.value}
          icon={item.icon}
          key={index}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </div>
  );
};
export default Filtered;
