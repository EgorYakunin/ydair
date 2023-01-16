import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function get_all(req: NextRequest, res: NextResponse) {
    let sell;
    sell = await prisma.flight.findMany({
        select: {
            id: true,
            arrival_code: true,
            departure_code: true,
            departure_time: true,
            flight_time: true,
            price: true,
        },
    });
    console.log(sell);

    // @ts-ignore
    res.status(200).send(sell);
}
