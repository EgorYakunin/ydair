import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function delete_aircraft(
    req: NextRequest,
    res: NextResponse
) {
    // @ts-ignore
    const { id } = JSON.parse(req.body);

    console.log(id);

    // cant delete plane if it is involved in any flight
    const flights = await prisma.flight.findFirst({
        where: {
            plane: {
                id: Number(id),
            }
        }
    })

    if (flights) {
        // @ts-ignore
        return res.status(400).send("Have active flights");
    }

    const delete_plane = await prisma.plane.delete({
        where: {
            id: Number(id),
        },
    });

    // @ts-ignore
    res.status(200).send({ res: "ok" });
}
