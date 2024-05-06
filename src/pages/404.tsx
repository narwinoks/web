import { NextPage } from 'next';

const Custom404: NextPage = () => {
    return (
        <div className='flex flex-col text-center items-center justify-center h-[60vh] md:h-[40vh]'>
            <h1 className='text-8xl font-semibold w-full'>404</h1>
            <div className="mt-3">
                <p className='font-medium'>Oops! <span className='ml-1'>Page Not Found</span></p>
            </div>
        </div>
    );
};

export default Custom404;