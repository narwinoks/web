import clsx from 'clsx'
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode,
    href: string;
    isBlank?: boolean;
}
const Button = ({ children, href, isBlank }: ButtonProps) => {
    return (
        <Link href={href} target='_blank'>
            <div className={clsx('flex justify-center h-5 items-center', 'gap-2', 'bg-transparent w-auto', 'cursor-pointer py-2')}>
                {children}
            </div>
        </Link>
    )
}

export default Button