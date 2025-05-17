import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ビルド時の ESLint エラーを無視する
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ビルド時の TypeScript エラーを無視する
    ignoreBuildErrors: true,
  },
  // React の Strict Mode を無効にする
  reactStrictMode: false,
  // SWC のコンパイラを使用する
  swcMinify: true,
  // 既存の画像ドメイン設定
  images: {
    domains: [
      "yakiragneieptkwwnlvn.supabase.co",  // Supabase のストレージドメイン
    ],
  },
};

export default nextConfig;
