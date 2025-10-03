import slug from 'slug';

import prisma from '@/common/libs/prisma';

export const saveBlog = async (request: any) => {
  const response: { data: any; status: number; error?: string } = {
    data: null,
    status: 500,
  };
  try {
    const categoryId = parseInt(request.categoryId, 10);
    const authorId = parseInt(request.authorId, 10);

    const stringSlug: string = slug(request.title, { lower: true });
    const blog = await prisma.posts.create({
      data: {
        title: request.title,
        slug: stringSlug,
        body: request.body,
        category: {
          connect: {
            id: categoryId,
          },
        },
        author: {
          connect: {
            id: authorId,
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

export const getBlogs = async (
  limit: number,
  offset: number,
  search: string,
  sort: 'asc' | 'desc',
  category_id?: number,
) => {
  try {
    const whereClause: any = {};

    if (category_id) {
      whereClause.category_id = category_id;
    }

    if (search) {
      whereClause.title = {
        contains: search,
        mode: 'insensitive',
      };
    }

    const blogs = await prisma.posts.findMany({
      skip: offset,
      take: limit,
      where: whereClause,
      orderBy: {
        createdAt: sort,
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

    const totalCount = await prisma.posts.count({
      where: whereClause,
    });

    return {
      data: blogs.map((element: any) => ({
        ...element,
        count: Math.floor(Math.random() * 10), // opsional
      })),
      totalCount,
      status: 200,
    };
  } catch (error: any) {
    return {
      data: error.message,
      status: 500,
    };
  }
};

export const showBlogs = async (slug: string) => {
  try {
    const blog = await prisma.posts.findFirst({
      where: { slug },
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

    if (!blog) {
      return {
        data: null,
        status: 404,
        message: 'Blog not found',
      };
    }
    const blogWithViewers = {
      ...blog,
      viewer: 10,
    };

    return {
      data: blogWithViewers,
      status: 200,
    };
  } catch (error: any) {
    return {
      data: error,
      status: 500,
    };
  }
};
