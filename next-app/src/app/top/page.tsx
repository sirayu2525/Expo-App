import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { getUserFromCookie } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function HomePage() {
    const user = getUserFromCookie()
    if(!user) redirect("/login")

    const now = new Date();
    const events = await prisma.event.findMany({
        where: {
        isDeleted: false,
        endsAt: {
            gt: now,
        },
        },
        include: {
            timeSlots: {
                orderBy: { startAt: 'asc' },
            },
            badge : true,
        },
        orderBy: { startsAt: 'asc' },
    });
    // console.log(events)

    return (
        <>
        <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">予約可能なイベント一覧</h1>
        {events.length === 0 && <p>現在、予約可能なイベントはありません。</p>}
        {events.map((event) => (
            <div key={event.eventId} className="mb-8 p-4 border rounded">
                          {/* バッジ表示 */}
            {event.badge && (
                <div className="mb-4 flex items-center">
                    <Image
                    src={event.badge.image}
                    alt={event.badge.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-3"
                    />
                </div>
            )}

            <h2 className="text-xl font-semibold">{event.eventName}</h2>
            <p className="text-gray-700 mb-2">{event.title}</p>
            <p className="text-sm text-gray-500 mb-2">{event.description}</p>
            <p className="text-sm text-gray-500 mb-4">{new Date(event.startsAt).toLocaleString()} 〜 {new Date(event.endsAt).toLocaleString()}</p>

            <h3 className="font-semibold mb-2">予約可能な時間帯:</h3>
            <div className="space-y-2">
                {event.timeSlots.map((slot) => (
                <div key={slot.timeSlotId} className="flex justify-between items-center border px-3 py-2 rounded">
                    <span>{new Date(slot.startAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(slot.endAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <Link
                    href={`/reserve/${slot.timeSlotId}`}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                    予約する
                    </Link>
                </div>
                ))}
            </div>
            </div>
        ))}
        </div>
        <Link href="/create" className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">イベント作成</Link>
        <Link href="/me_client" className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">クライアントのもの</Link>
        <Link href="/cookie" className="fixed bottom-4 left-24 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">クッキーのもの</Link>
        </>
    );
}
