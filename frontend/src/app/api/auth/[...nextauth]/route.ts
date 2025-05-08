import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
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
    async jwt({ token, profile }) {
      if (profile) {
        token.discordId = profile.id;
        token.email = profile.email;
        token.name = profile.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.discordId = token.discordId;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
