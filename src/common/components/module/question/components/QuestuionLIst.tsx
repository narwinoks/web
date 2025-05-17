import React from 'react';

import Card from '@/common/components/elements/Card';

const QuestuionLIst = () => {
  return (
    <div className="pt-5">
      <h1 className="text-2xl font-semibold">Best Question From You ?</h1>
      <p className="mt-2">I have collected the best questions from you.</p>
      <div className="mt">
        <Card className="cursor-pointer">
          <div className="grid  grid-cols-1">
            <h3 className="text-xl">hai kak, menarik nih blognya</h3>
            <p className="mt-2 text-sm font-light">
              Question for <span className="font-medium">Unknown</span> for 99d
              ago
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuestuionLIst;
