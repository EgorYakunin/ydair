import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function delete_airport(
    req: NextRequest,
    res: NextResponse
) {
    // @ts-ignore
    const { id } = JSON.parse(req.body);

    const delete_airport = await prisma.airport.delete({
        where: {
            id: Number(id),
        },
    });

    // @ts-ignore
    res.status(200).send({ res: "ok" });
}
