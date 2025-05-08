import NextAuth, { DefaultSession, Profile as DefaultProfile } from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username?: string;
    } & DefaultSession["user"];
  }
  
  interface Profile extends DefaultProfile {
    id: string;
    username: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends NextAuthJWT {
    id: string;
    username: string;
    accessToken?: string;
  }
}