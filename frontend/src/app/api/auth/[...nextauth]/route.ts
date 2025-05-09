import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
// import type { JWT } from "next-auth/jwt";




export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "identify email",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, profile, account }) {
      if (profile) {
        // console.log("profile", profile);
        token.name = profile.name;
        token.email = profile.email;
      }
      if (account) {
        // console.log("account", account);
        token.id = account.providerAccountId;
      }
      // console.log("token", token);
      return token;
    },
    async session({ session, token }) {
      session.user!.name = token.name as string;
      session.user!.email = token.email as string;
      session.user!.image = token.id as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
