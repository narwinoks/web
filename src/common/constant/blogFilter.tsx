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
        value: 'code',
        icon: <IoIosCode size={20} />
    },
    {
        label: 'Design',
        value: 'design',
        icon: <AiOutlineAntDesign size={20} />
    },
    {
        label: 'OS',
        value: 'os',
        icon: <MdOutlineTerminal size={20} />
    },
    {
        label: 'Other',
        value: 'other',
        icon: <GrMoreVertical size={20} />
    }
];
