import prisma from '@/common/libs/prisma';
import slug from 'slug';
interface BlogProps {
    title: string;
  }
export const saveBlog = async (data: any)=> {
    const response: { data: any; status: number; error?: string } = { data: null, status: 500 };
    try {
        const stringSlug = slug(data.title, '-');
        const blog = await prisma.contents.create({
            data: {
                title: data.title,
                slug: stringSlug,
                category: data.category,
                status : true
                // body: data.body,
            },
        });
        response.data = blog;
        response.status = 200;
    } catch (error: any) {
        console.log(error);
        response.data = [];
        response.status = 500;
    }
    return response;
};
  