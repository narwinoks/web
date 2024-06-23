import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const cookieStore = cookies();

  return new Response('Hello, Next.js!', {
    status: 200,
  });
}
