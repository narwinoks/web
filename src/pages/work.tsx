import Work from '@/common/components/module/work'
import { NextSeo } from 'next-seo';
import React from 'react'
const PAGE_TITLE = 'Work';
const work = () => {
    return (
        <section>
            <NextSeo title={`${PAGE_TITLE} - Winarno`} />
            <Work></Work>
        </section>
    )
}

export default work