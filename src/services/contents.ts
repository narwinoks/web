import slug from 'slug';

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

export const getBlogs = async (limit: number, offset: number) => {
  try {
    const blogs = await prisma.posts.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    const totalCount = await prisma.posts.count();
    return {
      data: blogs.map((element: any) => ({
        ...element,
        count: Math.floor(Math.random() * 10),
      })),
      totalCount: totalCount,
      status: 200,
    };
  } catch (error: any) {
    return {
      data: error,
      status: 500,
    };
  }
};
