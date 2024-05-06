import React from 'react'

type color = ['dark', 'light', 'transparent', 'danger']
interface BadgeProps {
    image?: string
    color: string
}
const Badge = () => {
    return (
        <div>Badge</div>
    )
}

export default Badge