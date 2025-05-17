import { cookies } from 'next/headers';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

export default async function MePage() {
  const token = (await cookies()).get('jwt')?.value;
  if (!token) redirect('/login');

  const { sub: userId } = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };

  const reservations = await prisma.reservation.findMany({
    where: {
      userId,
    },
    include: {
      timeSlot: {
        include: {
          event: true,
        },
      },
    },
    orderBy: {
      reservedAt: 'desc',
    },
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">自分の予約一覧</h1>
      {reservations.length === 0 ? (
        <p>現在、予約はありません。</p>
      ) : (
        <ul className="space-y-4">
          {reservations.map((r) => (
            <li key={r.reservationId} className="border rounded p-4">
              <p><strong>イベント:</strong> {r.timeSlot.event.eventName}</p>
              <p><strong>時間帯:</strong> {new Date(r.timeSlot.startAt).toLocaleString()} - {new Date(r.timeSlot.endAt).toLocaleString()}</p>
              <p><strong>ステータス:</strong> {r.status === 'RESERVED' ? '予約中' : 'キャンセル済み'}</p>
              {r.status === 'RESERVED' && (
                <form action={cancelReservation} method="POST" className="mt-2">
                  <input type="hidden" name="reservationId" value={r.reservationId} />
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    キャンセル
                  </button>
                </form>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

async function cancelReservation(formData: FormData) {
  'use server';

  const token = (await cookies()).get('jwt')?.value;
  if (!token) redirect('/login');
  const { sub: userId } = jwt.verify(token, process.env.SECRET_KEY!) as { sub: string };

  const reservationId = Number(formData.get('reservationId'));

  const reservation = await prisma.reservation.findUnique({
    where: { reservationId },
  });

  if (!reservation || reservation.userId !== userId) return;

  await prisma.reservation.update({
    where: { reservationId },
    data: {
      status: 'CANCELED',
      canceledAt: new Date(),
    },
  });

  redirect('/me');
}
