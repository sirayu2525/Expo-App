import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

interface Props {
  params: { timeSlotId: string };
}

export default async function ReservePage({ params }: Props) {
  const slotId = Number(params.timeSlotId);
  const slot = await prisma.timeSlot.findUnique({
    where: { timeSlotId: slotId },
    include: {
      event: true,
      reservations: true,
    },
  });

  if (!slot) return <div>スロットが見つかりません</div>;

  const token = (await cookies()).get('jwt')?.value;
  if (!token) redirect('/login');
  const { sub: userId } = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };

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
          <input type="hidden" name="timeSlotId" value={slotId} />
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

  const token = (await cookies()).get('jwt')?.value;
  if (!token) redirect('/login');
  const { sub: userId } = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };

  const timeSlotId = Number(formData.get('timeSlotId'));
  const slot = await prisma.timeSlot.findUnique({
    where: { timeSlotId },
    include: { reservations: true },
  });

  if (!slot) throw new Error('スロットが存在しません');
  if (slot.reservations.some((r) => r.userId === userId)) return;
  if (slot.reservations.length >= slot.capacity) return;

  await prisma.reservation.create({
    data: {
      userId,
      timeSlotId,
      status: 'RESERVED',
    },
  });

  redirect('/me');
}
