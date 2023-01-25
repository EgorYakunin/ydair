import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function search(req: NextRequest, res: NextResponse) {
    const airport = await prisma.airport.findMany({
        select: {
            id: true,
            city: true,
            code: true,
        },
    });

    // @ts-ignore
    res.status(200).send(airport);
}
