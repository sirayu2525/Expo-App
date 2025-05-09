import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import type { JWT } from "next-auth/jwt";
import type { Profile } from "next-auth";
import type { Session } from "next-auth";
import type { NextAuthOptions } from "next-auth";

export const authOptions : NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // JWT を使用
  },
  callbacks: {
    async jwt({
        token,
        profile,
      }: {
        token: JWT;
        profile?: Profile;
      }) {
        if (profile) {
            token.name = profile.name;
            token.email = profile.email;
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
        session.user!.name = token.name as string;
        session.user!.email = token.email as string;
        return session;
      }
      
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
