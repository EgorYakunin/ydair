import { prisma } from '../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

function code_to_city(code: string): string {
    if (code === 'LED') return 'Saint-Petersburg';
    if (code === 'LAX') return 'Los Angeles';
    if (code === 'JNK') return 'New York';
    if (code === 'SFO') return 'San Francisco';
    if (code === 'NSK') return 'Norilsk';

    return 'bruh';
}

export default async function add(req: NextRequest, res: NextResponse) {
    const { fl_num, arr_id, dep_id, dep_time, time, price, plane_id } = JSON.parse(req.body);

    console.log(plane_id);

    const sell = await prisma.flight.create({
        data: {
            flight_number: fl_num,

            arrival_code: arr_id,
            arrival_city: code_to_city(arr_id),

            departure_code: dep_id,
            departure_city: code_to_city(dep_id),

            departure_time: dep_time,
            flight_time: Number(time),
            price: Number(price),
            planeId: Number(plane_id),
        },
    });

    res.status(200).send({ res: 'ok' });
}
