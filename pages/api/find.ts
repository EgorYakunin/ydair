import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export default async function find(req: NextRequest, res: NextResponse) {
    // @ts-ignore
    const { arr_code, dep_code } = JSON.parse(req.body);

    let sell;
    if (!arr_code && !dep_code) {
        sell = await prisma.flight.findMany({
            select: {
                id: true,
                departure_time: true,
                flight_time: true,
                price: true,
                arrival_code: true,
                departure_code: true,
            },
        });
    }
    else if (arr_code && dep_code) {
        sell = await prisma.flight.findMany({
            where: {
                arrival_code: arr_code,
                departure_code: dep_code,
            },
            select: {
                id: true,
                departure_time: true,
                flight_time: true,
                price: true,
                arrival_code: true,
                departure_code: true,
            },
        });
    } else if (arr_code) {
        sell = await prisma.flight.findMany({
            where: {
                arrival_code: arr_code,
            },
            select: {
                id: true,
                departure_time: true,
                flight_time: true,
                price: true,
                arrival_code: true,
                departure_code: true,
            },
        });
    } else {
        sell = await prisma.flight.findMany({
            where: {
                departure_code: dep_code,
            },
            select: {
                id: true,
                departure_time: true,
                flight_time: true,
                price: true,
                departure_code: true,
                arrival_code: true
            },
        });
    }

    console.log(sell);

    // @ts-ignore
    res.status(200).send(sell);
}
