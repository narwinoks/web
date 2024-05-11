import { MdMailOutline } from 'react-icons/md';
import { FaRegFilePdf, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import { FooterItemProps } from '../types/footer';
export const FOOTER_ITEMS: FooterItemProps[] = [
    {
        icon: <FaRegFilePdf size={18} />,
        href: 'https://docs.google.com/document/d/1nnn133c8TEc664HU2SIBKGIXfkIKIYJGEBu0q39Oc4I/edit?usp=sharing',
        title: 'CV',
    },
    {
        icon: <FaTwitter size={18} />,
        href: '#',
        title: 'Twitter',
    },
    {
        icon: <AiFillGithub size={18} />,
        href: 'https://github.com/narwinoks',
        title: 'Github',
    },
    {
        icon: <FaLinkedin size={18} />,
        href: 'https://linkedin.com/in/winarno',
        title: 'Linked',
    },
    {
        icon: <MdMailOutline size={18} />,
        href: 'mailto:narnowin00@gmail.com',
        title: 'Email',
    },
];
