import React, { useEffect,useState } from 'react';

import { api } from '@/common/libs/useApi';
import { TypePropsQuestion } from '@/common/types/question';

import FormQuestion from './FormQuestion';
import Heading from './Heading';
import QuestionList from './QuestionList';

const Question = () => {
  const [isSavingData, setIsSavingData] = useState<boolean>(false);
  const [isLoadingFetchData, setLoadingFetchData] = useState<boolean>(false);
  const [dataQuestion, setDataQuestion] = useState<TypePropsQuestion[]>([]);
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
      fetchDataQuestion();
      setIsSavingData(false);
    }
  };
  const fetchDataQuestion = async () => {
    setLoadingFetchData(true);
    try {
      const { data } = await api.get('/api/questions');
      setDataQuestion(data?.data);
    } catch (e) {
      setLoadingFetchData(false);
    } finally {
      setLoadingFetchData(false);
    }
  };
  useEffect(() => {
    fetchDataQuestion();
  }, []);
  return (
    <>
      <Heading></Heading>
      <FormQuestion
        onSave={handlerSaveData}
        isLoading={isSavingData}
      ></FormQuestion>
      <QuestionList
        loading={isLoadingFetchData}
        data={dataQuestion}
      ></QuestionList>
    </>
  );
};

export default Question;
