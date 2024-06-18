import { GrMoreVertical } from 'react-icons/gr';
import { IoIosCode, IoIosOptions } from "react-icons/io";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdOutlineTerminal } from "react-icons/md";

import { FilterBlogProps } from '../types/filterBlog';

export const FILTER_BLOG_ITEMS: FilterBlogProps[] = [
    {
        label: 'All',
        value: '',
        icon: <IoIosOptions size={20} />
    },
    {
        label: 'Code',
        value: '1',
        icon: <IoIosCode size={20} />
    },
    {
        label: 'Design',
        value: '2',
        icon: <AiOutlineAntDesign size={20} />
    },
    {
        label: 'OS',
        value: '3',
        icon: <MdOutlineTerminal size={20} />
    },
    {
        label: 'Other',
        value: '4',
        icon: <GrMoreVertical size={20} />
    }
];
