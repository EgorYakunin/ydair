import { prisma } from '../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export default async function add(req: NextRequest, res: NextResponse) {
    // @ts-ignore
    const { reg_number, plane_name, airline } = JSON.parse(req.body);

    const sell = await prisma.plane.create({
        data: {
            reg_number,
            name: plane_name,
            airline
        },
    });

    // @ts-ignore
    res.status(200).send({ res: 'ok' });
}
