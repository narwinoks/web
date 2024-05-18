import Hr from '@/common/components/elements/Hr';
import { WORK_ITEM } from '@/common/constant/work';
import { TypePropsWork } from '@/common/types/work';
import React from 'react'
import { FiMapPin } from "react-icons/fi";

const Item = () => {
    return (
        <div className="pt-5">
            {
                WORK_ITEM.map((item: TypePropsWork, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="my-2 w-full">
                                <h1 className="text-xl font-medium">{item.company}</h1>
                                <div className="flex gap-4 items-center mt-2">
                                    <FiMapPin size={16} />
                                    <h3 className="text-sm">{item.location}</h3>
                                </div>
                                <div className="flex justify-between items-center mt-5">
                                    <h3 className="text-md">{item.position}</h3>
                                    <h3 className="text-md">{item.date}</h3>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm">
                                        {
                                            item.description
                                        }
                                    </p>
                                </div>
                            </div>
                            <Hr></Hr>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default Item