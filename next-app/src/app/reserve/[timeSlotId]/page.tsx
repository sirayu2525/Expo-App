import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default async function ReservePage({
  searchParams,
  params,
}: {
  searchParams: Promise<{ jwt: string }>;
  params: Promise<{ timeSlotId: string }>;
}) {
  const { jwt: token } = await searchParams;
  const { timeSlotId: timeSlotIdStr } = await params;
  const timeSlotId = Number(timeSlotIdStr);

  if (isNaN(timeSlotId)) return <div>不正なスロットIDです</div>;

  let userId: string;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };
    userId = decoded.sub;
  } catch (err) {
    console.error('JWT検証失敗:', err);
    redirect('/login');
  }

  const slot = await prisma.timeSlot.findUnique({
    where: { timeSlotId },
    include: {
      event: true,
      reservations: true,
    },
  });

  if (!slot) return <div>スロットが見つかりません</div>;

  const isAlreadyReserved = slot.reservations.some((r) => r.userId === userId);
  const isFull = slot.reservations.length >= slot.capacity;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">予約確認</h1>
      <p><strong>イベント名:</strong> {slot.event.eventName}</p>
      <p><strong>時間帯:</strong> {new Date(slot.startAt).toLocaleTimeString()} - {new Date(slot.endAt).toLocaleTimeString()}</p>
      <p><strong>定員:</strong> {slot.capacity} / 現在 {slot.reservations.length}</p>

      {isAlreadyReserved && <p className="text-red-500 mt-4">すでにこの時間帯に予約済みです。</p>}
      {isFull && <p className="text-red-500 mt-4">このスロットは満席です。</p>}

      {!isAlreadyReserved && !isFull && (
        <form action={reserveAction} className="mt-6">
          <input type="hidden" name="timeSlotId" value={timeSlotId} />
          <input type="hidden" name="jwt" value={token} />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            予約する
          </button>
        </form>
      )}
    </div>
  );
}

async function reserveAction(formData: FormData) {
  'use server';

  const token = formData.get('jwt') as string;
  const timeSlotId = Number(formData.get('timeSlotId'));

  if (!token || isNaN(timeSlotId)) {
    redirect('/login');
  }

  let userId: string;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };
    userId = decoded.sub;
  } catch (err) {
    console.error('JWTエラー:', err);
    redirect('/login');
  }

  await prisma.reservation.create({
    data: {
      userId,
      timeSlotId,
      status: 'RESERVED',
    },
  });

  revalidatePath('/top');
  redirect(`/me?jwt=${encodeURIComponent(token)}`);
}
