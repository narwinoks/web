import React from 'react';

import Card from '@/common/components/elements/Card';
import { TypePropsQuestion } from '@/common/types/question';

interface QuestionListProps {
  data: TypePropsQuestion[];
  loading: boolean;
}

const QuestionList: React.FC<QuestionListProps> = ({ data, loading }) => {
  if (loading) return <p>Loading questions...</p>;
  return (
    <div className="pt-5">
      <h1 className="text-2xl font-semibold">Best Question From You ?</h1>
      <p className="mt-2">I have collected the best questions from you.</p>
      <div className="mt-4 grid gap-4">
        {data.map((q) => (
          <Card key={q.id} className="cursor-pointer p-4">
            <h3 className="text-xl">{q.question}</h3>
            <p className="mt-2 text-sm font-light">
              Question by{' '}
              <span className="font-medium">{q.name || 'Unknown'}</span> –{' '}
              {new Date(q.createdAt).toLocaleDateString()}
            </p>
          </Card>
        ))}
        {/* <p>{data}</p> */}
      </div>
    </div>
  );
};

export default QuestionList;
