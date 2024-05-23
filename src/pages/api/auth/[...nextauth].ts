import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { username, password } = credentials as { username: string, password: string };
        if (username === 'admin' && password === 'password') {
          return { id: '1', name: 'Admin', email: 'admin@example.com' };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  }
});
