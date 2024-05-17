import Card from '@/common/components/elements/Card'
import React from 'react'
interface ItemViewProps {
    label: string,
    value: string
}
const ItemView = ({ label, value }: ItemViewProps) => {
    return (
        <Card>
            <h1 className="text-base text-borderDark light:text-borderLight">{label}</h1>
            <h2 className="text-lg">{value}</h2>
        </Card>
    )
}

export default ItemView