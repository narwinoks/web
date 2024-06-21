import slug from 'slug';

import prisma from '@/common/libs/prisma';

export const saveBlog = async (data: any) => {
  const response: { data: any; status: number; error?: string } = {
    data: null,
    status: 500,
  };
  try {
    const stringSlug = slug(data.title, '-');
    const blog = await prisma.posts.create({
      data: {
        title: data.title,
        slug: stringSlug,
        category: data.category,
      },
    });
    response.data = blog;
    response.status = 200;
  } catch (error: any) {
    response.data = [];
    response.status = 500;
  }
  return response;
};
