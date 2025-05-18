// app/create/page.tsx
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

export default async function CreateEventPage({
  searchParams,
}: {
  searchParams: { jwt?: string };
}) {
  const token = (await searchParams).jwt;
  if (!token) redirect('/login');

  let userId: string;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };
    userId = decoded.sub;
  } catch {
    redirect('/login');
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">イベント作成</h1>
      <form action={createEventAction} className="space-y-4">
        <input type="hidden" name="jwt" value={token} />
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

// サーバーアクション
async function createEventAction(formData: FormData) {
  'use server';

  const token = formData.get('jwt') as string;
  if (!token) redirect('/login');

  let userId: string;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };
    userId = decoded.sub;
  } catch {
    redirect('/login');
  }

  const eventName   = formData.get('eventName') as string;
  const title       = formData.get('title') as string;
  const description = formData.get('description') as string;
  const startsAt    = new Date(formData.get('startsAt') as string);
  const endsAt      = new Date(formData.get('endsAt') as string);
  const capacity    = parseInt(formData.get('capacity') as string);

  const badge = await prisma.badgeList.create({
    data: {
      name:        eventName,
      description: 'イベントの記念バッジです',
      image:       'https://yakiragneieptkwwnlvn.supabase.co/storage/v1/object/public/images//myakumyaku.png',
    },
  });

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

  const slots = [];
  const cur = new Date(startsAt);
  while (cur < endsAt) {
    const end = new Date(cur.getTime() + 60 * 60 * 1000);
    if (end > endsAt) break;
    slots.push({
      eventId: event.eventId,
      startAt: new Date(cur),
      endAt: new Date(end),
      capacity,
    });
    cur.setHours(cur.getHours() + 1);
  }

  await prisma.timeSlot.createMany({ data: slots });

  await prisma.userBadge.create({
    data: {
      userId,
      badgeId: badge.badgeId,
    },
  });

  redirect('/top?jwt=' + token);
}
