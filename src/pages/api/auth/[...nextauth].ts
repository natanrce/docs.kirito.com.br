import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (credentials?.password === process.env.NEXT_PUBLIC_PASSWORD) {
          return { id: '1', name: 'Aluno' };
        }

        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30 // 30 days
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
