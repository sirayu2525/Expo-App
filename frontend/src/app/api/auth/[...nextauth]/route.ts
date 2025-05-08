// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import type { JWT } from "next-auth/jwt";
import type { Profile } from "next-auth";
import type { Session } from "next-auth";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // JWT を使用
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT;
      account?: any;
      profile?: Profile;
    }) {
      // Initial sign in
      if (account && profile) {
        return {
          ...token,
          id: profile.id,
          username: profile.username,
          accessToken: account.access_token,
        };
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }) {
      session.user = {
        ...session.user,
        id: token.id as string,
        username: token.username as string,
      };
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
    // error: '/auth/error', // Uncomment if you have a custom error page
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };