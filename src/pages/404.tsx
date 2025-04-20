import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center text-center md:h-[40vh]">
      <h1 className="w-full text-8xl font-semibold">404</h1>
      <div className="mt-3">
        <p className="font-medium">
          Oops! <span className="ml-1">Page Not Found</span>
        </p>
      </div>
    </div>
  );
};

export default Custom404;
