import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function update(req: NextRequest, res: NextResponse) {
    // @ts-ignore
    const { id, flight_data } = JSON.parse(req.body);

    const update_car = await prisma.flight.update({
        where: {
            id: Number(id),
        },
        data: flight_data
    });

    // @ts-ignore
    res.status(200).send({ res: "ok" });
}
