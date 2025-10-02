import prisma from '@/common/libs/prisma';

export const saveQuestion = async (request: any) => {
  const response: { data: any; status: number; error?: string } = {
    data: null,
    status: 500,
  };
  try {
    const blog = await prisma.question.create({
      data: request,
    });
    response.data = blog;
    response.status = 200;
  } catch (error: any) {
    response.data = error;
    response.status = 500;
  }
  return response;
};
export const getQuestion = async () => {
  const response: { data: any; status: number; error?: string } = {
    data: null,
    status: 500,
  };
  try {
    const question = await prisma.question.findMany({
      where: {
        is_verify_admin: true,
      },
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });
    response.data = question;
    response.status = 200;
  } catch (error: any) {
    response.data = error;
    response.status = 500;
  }
  return response;
};
