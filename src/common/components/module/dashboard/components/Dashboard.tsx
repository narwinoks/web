import React from 'react'
import Heading from './Heading'
import Hr from '@/common/components/elements/Hr'
import Wakatime from './wakatime/Wakatime'
import Github from './github'

const Dashboard = () => {
    return (
        <>
            <Heading></Heading>
            <Hr></Hr>
            <Wakatime></Wakatime>
            <Github></Github>
        </>
    )
}

export default Dashboard