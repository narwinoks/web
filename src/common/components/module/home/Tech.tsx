import React from 'react';

import { TECH_ITEMS } from '@/common/constant/tech';
import { TechItemProps } from '@/common/types/tech';

import Card from '../../elements/Card';
import Image from '../../elements/Image';
const Tech = () => {
  return (
    <section className="py-8 md:py-12">
      <p>
        I invest small angel checks into early stage startups building tools for
        developers.
      </p>
      <div className="grid-cols flex gap-4 py-8 md:py-12">
        {TECH_ITEMS.map((data: TechItemProps, index: number) => (
          <Card
            key={index}
            className="flex items-center justify-center text-center"
          >
            <Image
              src={data.image}
              alt={`image-${index}`}
              width={60}
              height={20}
            />
          </Card>
        ))}
      </div>
      <p>
        I work at a startup company engaged in application development for
        hospitals throughout Indonesia.
      </p>
    </section>
  );
};

export default Tech;
