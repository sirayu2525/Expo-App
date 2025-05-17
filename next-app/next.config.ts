import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ビルド時の ESLint エラーを無視する
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 既存の画像ドメイン設定
  images: {
    domains: [
      "yakiragneieptkwwnlvn.supabase.co",  // Supabase のストレージドメイン
    ],
  },
};

export default nextConfig;
