import Admin from '@/common/components/module/admin'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const index = () => {
    return (
        <>
            <Admin></Admin>
        </>
    )
}

export default index