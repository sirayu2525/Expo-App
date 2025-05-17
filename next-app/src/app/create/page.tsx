import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

export default async function CreateEventPage() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">イベント作成</h1>
      <form action={createEventAction} className="space-y-4">
        <input type="text" name="eventName" placeholder="イベント名" required className="w-full border rounded px-3 py-2" />
        <input type="text" name="title" placeholder="タイトル" required className="w-full border rounded px-3 py-2" />
        <textarea name="description" placeholder="詳細" required className="w-full border rounded px-3 py-2" />
        <input type="datetime-local" name="startsAt" required className="w-full border rounded px-3 py-2" />
        <input type="datetime-local" name="endsAt" required className="w-full border rounded px-3 py-2" />
        <input type="number" name="capacity" placeholder="各スロットの定員" required className="w-full border rounded px-3 py-2" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">作成</button>
      </form>
    </div>
  );
}

async function createEventAction(formData: FormData) {
  'use server';

  // 1. ログインチェック
  const token = (await cookies()).get('jwt')?.value;
  if (!token) redirect('/login');
  const { sub: userId } = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };

  // フォームの値取得
  const eventName   = formData.get('eventName') as string;
  const title       = formData.get('title') as string;
  const description = formData.get('description') as string;
  const startsAt    = new Date(formData.get('startsAt') as string);
  const endsAt      = new Date(formData.get('endsAt') as string);
  const capacity    = parseInt(formData.get('capacity') as string);

  // 2. バッジを作成
  const badge = await prisma.badgeList.create({
    data: {
      name:        eventName,
      description: 'イベントの記念バッジです',
      image:       'https://yakiragneieptkwwnlvn.supabase.co/storage/v1/object/public/images//myakumyaku.png',
    },
  });

  // 3. イベント作成（badgeId を紐づけ）
  const event = await prisma.event.create({
    data: {
      hostId: userId,
      eventName,
      title,
      description,
      startsAt,
      endsAt,
      badgeId: badge.badgeId, 
    },
  });

  // 4. タイムスロット作成
  const slots = [];
  const cur = new Date(startsAt);
  while (cur < endsAt) {
    const end = new Date(cur.getTime() + 60 * 60 * 1000);
    if (end > endsAt) break;
    slots.push({
      eventId:  event.eventId,
      startAt:  new Date(cur),
      endAt:    new Date(end),
      capacity,
    });
    cur.setHours(cur.getHours() + 1);
  }
  await prisma.timeSlot.createMany({ data: slots });

  // 5. 作成者にバッジを付与
  await prisma.userBadge.create({
    data: {
      userId:  userId,
      badgeId: badge.badgeId,
    },
  });

  // 6. 完了後トップへリダイレクト
  redirect('/top');
}
