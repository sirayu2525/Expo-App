// layout.tsxは必ずServer Componentである必要がある。
import SessionProviderWrapper from '@/components/SessionProviderWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
