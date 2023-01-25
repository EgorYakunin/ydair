import { prisma } from '../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export default async function add(req: NextRequest, res: NextResponse) {
    // @ts-ignore
    const { city, code } = JSON.parse(req.body);

    const sell = await prisma.airport.create({
        data: {
            code,
            city
        },
    });

    // @ts-ignore
    res.status(200).send({ res: 'ok' });
}
