import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // その他の設定があればここに…
  images: {
    domains: [
      "yakiragneieptkwwnlvn.supabase.co",  // Supabase のストレージドメインを追加
    ],
  },
};

export default nextConfig;
