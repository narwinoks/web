import slug from 'slug'; // Pastikan slug diimpor dengan benar

import prisma from '@/common/libs/prisma';

export const saveBlog = async (request: any) => {
  const response: { data: any; status: number; error?: string } = {
    data: null,
    status: 500,
  };
  try {
    const stringSlug: string = slug(request.title, { lower: true });
    const blog = await prisma.posts.create({
      data: {
        title: request.title,
        slug: stringSlug,
        body: request.body,
        category: {
          connect: {
            id: request.categoryId,
          },
        },
        author: {
          connect: {
            id: request.authorId,
          },
        },
      },
    });

    response.data = blog;
    response.status = 200;
  } catch (error: any) {
    response.data = error;
    response.status = 500;
  }
  return response;
};
