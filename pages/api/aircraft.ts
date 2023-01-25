import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function search(req: NextRequest, res: NextResponse) {
    const aircrafts = await prisma.plane.findMany({
        select: {
            id: true,
            reg_number: true,
            name: true,
        },
    });

    // @ts-ignore
    res.status(200).send(aircrafts);
}
