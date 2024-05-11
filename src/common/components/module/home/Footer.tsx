import React from 'react'
import Button from '../../elements/Button'
import { MdArrowOutward } from "react-icons/md";
import { FOOTER_ITEMS } from '@/common/constant/footer';
import { FooterItemProps } from '@/common/types/footer';

const Footer = () => {
    return (
        <section className="md:mt-12 mt-8">
            <div className="md:flex grid grid-cols-3  gap-5">

                {
                    FOOTER_ITEMS.map((item: FooterItemProps, index: number) => {
                        return (
                            <Button href={item.href} key={index}>
                                {item.icon}
                                <p className="text-md font-medium">{item.title}</p>
                                <MdArrowOutward size={18}></MdArrowOutward>
                            </Button>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Footer