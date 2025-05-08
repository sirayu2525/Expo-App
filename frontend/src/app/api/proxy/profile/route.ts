// app/api/proxy/profile/route.ts
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Include the secret from your NextAuth configuration
    const token = await getToken({ 
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    
    console.log("Token exists:", !!token);
    if (token) console.log("Token properties:", Object.keys(token));
    
    // Ensure token exists
    if (!token) {
      return NextResponse.json({ error: "未認証" }, { status: 401 });
    }
    
    // Based on your NextAuth config, token.id should be available
    if (!token.id) {
      return NextResponse.json({ error: "トークンが無効です" }, { status: 401 });
    }
    
    // Make the authenticated request to the backend API
    const res = await fetch("http://localhost:8080/api/profile", {
      headers: {
        Authorization: `Bearer ${token.id}`,
      },
      cache: 'no-store',
    });
    
    // Check if the fetch request was successful
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({ error: "Unknown error" }));
      return NextResponse.json(errorData, { status: res.status });
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
