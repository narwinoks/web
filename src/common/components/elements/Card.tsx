import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface CardProps {
    children: ReactNode,
    className?: string
}
const Card = ({ children, className }: CardProps) => {
    return (
        <div className={clsx('card dark:bg-black bg-white border dark:border-borderDark border-borderLight w-auto rounded-md', 'min-h-10', 'px-4 py-2', className)}>
            {children}
        </div>
    )
}

export default Card