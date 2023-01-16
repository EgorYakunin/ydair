import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function search(req: NextRequest, res: NextResponse) {
    // @ts-ignore
    const { id } = JSON.parse(req.body);
    console.log("ID: " + id);

    const sell = await prisma.flight.findUnique({
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
                    name: true
                },
            },
        },
    });

    // @ts-ignore
    res.status(200).send(sell);
}
