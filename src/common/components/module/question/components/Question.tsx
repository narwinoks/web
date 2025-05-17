import React, { useState } from 'react';

import { api } from '@/common/libs/useApi';

import FormQuestion from './FormQuestion';
import Heading from './Heading';
import QuestuionLIst from './QuestuionLIst';

const Question = () => {
  const [isSavingData, setIsSavingData] = useState<boolean>(false);
  const handlerSaveData = async (json: {
    name: string;
    email: string;
    question: string;
    description: string | null;
  }) => {
    setIsSavingData(true);
    try {
      await api.post('/api/questions', json);
      return true;
    } catch (e) {
      setIsSavingData(false);
      return false;
    } finally {
      setIsSavingData(false);
    }
  };
  return (
    <>
      <Heading></Heading>
      <FormQuestion
        onSave={handlerSaveData}
        isLoading={isSavingData}
      ></FormQuestion>
      <QuestuionLIst></QuestuionLIst>
    </>
  );
};

export default Question;
