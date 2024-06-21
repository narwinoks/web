import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

import { FOOTER_ITEMS } from '@/common/constant/footer';
import { FooterItemProps } from '@/common/types/footer';

import Button from '../../elements/Button';

const Footer = () => {
  return (
    <section className="mt-8 md:mt-12">
      <div className="grid grid-cols-3 gap-5  md:flex">
        {FOOTER_ITEMS.map((item: FooterItemProps, index: number) => {
          return (
            <Button href={item.href} key={index}>
              {item.icon}
              <p className="text-md font-medium">{item.title}</p>
              <MdArrowOutward size={18}></MdArrowOutward>
            </Button>
          );
        })}
      </div>
    </section>
  );
};
export default Footer;
