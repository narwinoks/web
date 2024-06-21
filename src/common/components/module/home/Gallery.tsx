import React from 'react';
import Masonry from 'react-responsive-masonry';

import Image from '../../elements/Image';

const Gallery = () => {
  return (
    <section className="mt-8 md:mt-12">
      <Masonry columnsCount={3} gutter="10px" className="cursor-pointer">
        <div className="aspect-w-1 aspect-h-1 relative">
          <Image
            width={1200}
            height={1200}
            className="rounded-md object-cover"
            src="/images/image-gallery-1.png"
            alt="image-gallery-1"
          ></Image>
        </div>
        <div className="aspect-w-1 aspect-h-1 relative">
          <Image
            width={1200}
            height={1200}
            className="rounded-md object-cover"
            src="/images/image-gallery-2.png"
            alt="image-gallery-2"
          ></Image>
        </div>
        <div className="aspect-w-1 aspect-h-1 relative">
          <Image
            width={1200}
            height={1200}
            className="rounded-md object-cover"
            src="/images/image-gallery-3.png"
            alt="image-gallery-3"
          ></Image>
        </div>
        <div className="aspect-w-1 aspect-h-1 relative">
          <Image
            width={1200}
            height={1200}
            className="rounded-md object-cover"
            src="/images/image-gallery-4.png"
            alt="image-gallery-4"
          ></Image>
        </div>
        <div className="aspect-w-1 aspect-h-1 relative">
          <Image
            width={1200}
            height={1200}
            className="rounded-md object-cover"
            src="/images/image-gallery-5.png"
            alt="image-gallery-5"
          ></Image>
        </div>
        <div className="aspect-w-1 aspect-h-1 relative">
          <Image
            width={1200}
            height={1200}
            className="rounded-md object-cover"
            src="/images/image-gallery-6.png"
            alt="image-gallery-6"
          ></Image>
        </div>
      </Masonry>
    </section>
  );
};

export default Gallery;
