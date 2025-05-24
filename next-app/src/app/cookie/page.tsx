'use client'; // クライアントコンポーネントであることを明示

import { useEffect, useState } from 'react';

export default function ClientCookiePage() {
  const [cookie, setCookie] = useState('');

  useEffect(() => {
    // クライアント側でCookieを読み取る
    setCookie(document.cookie);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">ブラウザの Cookie 内容</h1>
      <p className="bg-gray-100 p-2 rounded break-words">{cookie || 'Cookie は存在しません。'}</p>
    </div>
  );
}
