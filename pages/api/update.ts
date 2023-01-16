import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import code_to_city from "@/lib/code_to_city";

export default async function update(req: NextRequest, res: NextResponse) {
    // @ts-ignore
    const { id, flight_data } = JSON.parse(req.body);

    function plane_convert(plane: string) {
        if (plane === "D-ATON") return 1;
        if (plane === "N156FE") return 2;
        if (plane === "N728FD") return 3;
        if (plane === "N724LA") return 4;
        if (plane === "N913NK") return 5;
        return 0;
    }

    const update_flight = await prisma.flight.update({
        where: {
            id: Number(id),
        },
        data: {
            flight_number: flight_data.flight_number,

            arrival_code: flight_data.arrival_airport,
            arrival_city: code_to_city(flight_data.arrival_airport),

            departure_code: flight_data.departure_airport,
            departure_city: code_to_city(flight_data.departure_airport),

            departure_time: `${flight_data.departure_date.trim()} ${
                flight_data.departure_time
            }`,
            flight_time: Number(flight_data.flight_time),
            price: Number(flight_data.price),
            planeId: plane_convert(flight_data.plane),
        },
    });

    // @ts-ignore
    res.status(200).send({ res: "ok" });
}
