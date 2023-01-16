import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function delete_flight(
    req: NextRequest,
    res: NextResponse
) {
    // @ts-ignore
    const { id } = JSON.parse(req.body);

    console.log(id);

    const delete_flight = await prisma.flight.delete({
        where: {
            id: Number(id),
        },
    });

    // @ts-ignore
    res.status(200).send({ res: "ok" });
}
