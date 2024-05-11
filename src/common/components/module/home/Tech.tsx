import React from 'react'
import Card from '../../elements/Card'
import Image from '../../elements/Image'
import { TECH_ITEMS } from '@/common/constant/tech'
import { TechItemProps } from '@/common/types/tech'
const Tech = () => {
    return (
        <section className='md:py-12 py-8'>
            <p>
                I invest small angel checks into early stage startups building tools for developers.
            </p>
            <div className="flex grid-cols md:py-12 py-8 gap-4">
                {
                    TECH_ITEMS.map((data: TechItemProps, index: number) => (
                        <Card key={index} className="flex items-center text-center justify-center">
                            <Image src={data.image} alt={`image-${index}`} width={60} height={20} />
                        </Card>
                    ))
                }
            </div>
            <p>I`ve worked with and advised companies on developer marketing, developer relations, building open-source communities, product-led growth, and more.</p>
        </section>
    )
}

export default Tech