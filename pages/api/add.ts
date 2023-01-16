import { prisma } from '../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import code_to_city from '@/lib/code_to_city';

export default async function add(req: NextRequest, res: NextResponse) {
    // @ts-ignore
    const { fl_num, arr_id, dep_id, dep_time, time, price, plane_id } = JSON.parse(req.body);

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

    // @ts-ignore
    res.status(200).send({ res: 'ok' });
}
