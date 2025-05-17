import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

import Card from '@/common/components/elements/Card';
import RButton from '@/common/components/elements/RButton';
import RField from '@/common/components/elements/RField';
import RInput from '@/common/components/elements/RInput';
import RLabel from '@/common/components/elements/RLabel';
import RTextarea from '@/common/components/elements/RTextarea';

type FormData = {
  name: string;
  email: string;
  question: string;
  description: string | null;
};

interface FormQuestionProps {
  onSave: (data: FormData) => Promise<boolean>;
  isLoading: boolean;
}

const FormQuestion: React.FC<FormQuestionProps> = ({ onSave, isLoading }) => {
  const [isShowFormInput, setIsShowFormInput] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await onSave(formData);
    if (data) {
      setFormData({
        name: '',
        description: '',
        email: '',
        question: '',
      });
      setIsShowFormInput(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        {!isShowFormInput && (
          <div className="flex items-center justify-between">
            <h1>Ask Me Question</h1>
            <button
              onClick={() => setIsShowFormInput(true)}
              className="rounded-md border border-borderLight bg-blue-700 px-6 py-2 text-white dark:border-borderDark dark:bg-black"
            >
              <FaPlus size={20} />
            </button>
          </div>
        )}
        {isShowFormInput && (
          <>
            <div className="mt-10 grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <RField>
                  <RLabel label="Name">
                    <RInput
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      id="input"
                      placeholder="e.g,John Admad Doe"
                    ></RInput>
                  </RLabel>
                </RField>
              </div>
              <div className="col-span-12 md:col-span-6">
                <RField>
                  <RLabel label="Email">
                    <RInput
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id="input"
                      type="email"
                      placeholder="e.g,john@yopmail.com"
                    ></RInput>
                  </RLabel>
                </RField>
              </div>
              <div className="col-span-12">
                <RField>
                  <RLabel label="Question">
                    <RInput
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      id="input"
                      type="text"
                      placeholder="Enter Your Question In Here !...."
                    ></RInput>
                  </RLabel>
                </RField>
              </div>
              <div className="col-span-12">
                <RField>
                  <RLabel label="Description">
                    <RTextarea
                      value={formData.description}
                      onChange={
                        handleChange as React.ChangeEventHandler<HTMLTextAreaElement>
                      }
                      id="description"
                      rows={2}
                      placeholder="Description Your Question In Here !...."
                    ></RTextarea>
                  </RLabel>
                </RField>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-12 gap-5">
              <div className="col-span-2">
                <RButton onClick={() => setIsShowFormInput(false)}>
                  Batal
                </RButton>
              </div>
              <div className="col-span-4">
                <RButton isLoading={isLoading} type="submit">
                  Kirim Pertanyaan
                </RButton>
              </div>
            </div>
          </>
        )}
      </Card>
    </form>
  );
};

export default FormQuestion;
