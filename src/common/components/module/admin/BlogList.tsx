import React from 'react'
import Card from '../../elements/Card'
import { formatDateToAgo, formatNumber } from '@/common/helpers'
import { FaEye, FaTrash } from 'react-icons/fa'
import { BsPencilSquare } from "react-icons/bs";

const BlogList = () => {
    return (
        <section className="mt-4 md:mt-10">
            <Card>
                <div className="flex items-center">
                    <div className="w-11/12">
                        <h1 className="font-medium text-lg pb-1">Auth with node js and express js and Json web token</h1>
                        <p className="text-sm">User authentication is a crucial aspect of web applications that ensures...</p>
                        <div className="flex py-2 items-center text-textLight gap-2 text-sm">
                            <p className="text-sm font-light">{formatNumber("20000")} views</p>
                            <span className="font-bold mb-1">.</span>
                            <p className="text-sm font-light">{formatDateToAgo("2023-07-23 08:24:00")} </p>
                        </div>
                        <h2 className="text-sm text-textLight font-light">Authors: WIN</h2>
                    </div>
                    <div className="w-1/12 ml-auto">
                        <button className="dark:bg-white bg-light py-2 rounded-md px-2">
                            <FaEye color="#000" size={15}></FaEye>
                        </button>
                        <button className="dark:bg-white bg-light mt-1 py-2 rounded-md px-2">
                            <BsPencilSquare color="#000" size={15} />
                        </button>
                        <button className="bg-red-800 mt-1 py-2 rounded-md px-2">
                            <FaTrash color="#fff" size={15} />
                        </button>
                    </div>
                </div>
            </Card>
        </section>
    )
}

export default BlogList