import { prisma } from '../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export default async function find(req: NextRequest, res: NextResponse) {
    const { arr_id, dep_id, id } = JSON.parse(req.body);

    let sell;
    if (arr_id === undefined && dep_id === undefined && id === undefined) {
        sell = await prisma.flight.findMany({});
    } else if (id !== undefined) {
        sell = await prisma.flight.findMany({
            where: {
                id: Number(id),
            },
            select: {
                id: true,
                flight_number: true,
                arrival_code: true,
                arrival_city: true,
                departure_code: true,
                departure_city: true,
                departure_time: true,
                flight_time: true,
                price: true,
                plane: {
                    select: {
                        reg_number: true,
                    },
                },
            },
        });
    } else {
        sell = await prisma.flight.findMany({
            where: {
                arrival_code: arr_id,
                departure_code: dep_id,
            },
        });
    }

    res.status(200).send(sell);
}
