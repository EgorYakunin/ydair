import { prisma } from "../../lib/prisma"
import { NextRequest, NextResponse } from "next/server";

export default async function del(req: NextRequest, res: NextResponse) {

    const {id} = JSON.parse(req.body);

    const delete_flight = await prisma.flight.deleteMany({
        where: {
            id: Number(id),
        },
    })

    res.status(200).send({res: "ok"})
}