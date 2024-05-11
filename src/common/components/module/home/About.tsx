import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import Badge from '../../elements/Badge'
import Card from '../../elements/Card'
import Image from '../../elements/Image'
import Link from 'next/link';

const About = () => {
    return (
        <section className='md:mt-12 mt-8'>
            <div className='my-4'>
                I continue to deepen the skills I have. Usually, I take courses and earn several <Badge href='' title='certificates'></Badge> . In addition to that, I also self-study through program documentation and other free resources. I focus on mastering PHP, JavaScript, TypeScript, Node.js, and more.
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-12 mt-8'>
                <Link href="/#">
                    <Card className="py-5">
                        <div className="flex justify-between cursor-pointer space-x-3 items-center">
                            <Image className='rounded-full' src="/images/billgates.png" width={50} height={20} alt='image-billgates'></Image>
                            <div className='flex flex-col'>
                                <h1 className='text-base font-bold'>@billgates</h1>
                                <p className='text-sm mt-1 font-light'>3,21 jt subscriber</p>
                            </div>
                            <MdArrowOutward size={25}></MdArrowOutward>
                        </div>
                    </Card>
                </Link>
                <Link href="/#">
                    <Card className="py-5">
                        <div className="flex justify-between cursor-pointer space-x-3 items-center">
                            <Image className='rounded-full' src="/images/microsoft.png" width={50} height={20} alt='image-billgates'></Image>
                            <div className='flex flex-col'>
                                <h1 className='text-base font-bold'>@Microsoft</h1>
                                <p className='text-sm mt-1 font-light'>1,51 jt subscriber</p>
                            </div>
                            <MdArrowOutward size={25}></MdArrowOutward>
                        </div>
                    </Card>
                </Link>
            </div>
        </section>
    )
}

export default About