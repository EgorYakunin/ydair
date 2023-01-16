"use client";
import Button from "@/components/Button";
import Spacer from "@/components/std/Spacer";
import Container from "@/components/std/Container";
import Input from "@/components/Input";
import form_controller from "./form_controller";

import { useEffect, useState } from "react";
import parse_query_string from "@/lib/parse_query";

interface ITicketData {
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    departure_date: string;
    flight_number: string;
    flight_time: number;
    price: number;
    plane: string;
}

export default function Page({ params }: { params: { id: string } }) {
    const { handle_change, onClick } = form_controller();

    function getQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        let params = parse_query_string(urlParams.toString());

        //@ts-ignore
        params.departure_date = params.departure_date.replace(/\+/gi, " ");

        return params;
    }

    function getPlane(airport: string) {
        if (airport == "D-ATON") {
            return 1;
        }
        if (airport == "N156FE") {
            return 2;
        }
        if (airport == "N728FD") {
            return 3;
        }
        if (airport == "N724LA") {
            return 4;
        }
        if (airport == "N913NK") {
            return 5;
        }
    }

    const [form_data, set_form_data] = useState<ITicketData>({
        departure_airport: "",
        arrival_airport: "",
        departure_time: "",
        departure_date: "",
        flight_number: "",
        flight_time: 0,
        price: 0,
        plane: "",
    });

    useEffect(() => {
        console.log(getQuery);

        //@ts-ignore
        set_form_data(getQuery);
    }, []);

    console.log(form_data);

    return (
        <>
            <Spacer top="6" />
            <Input
                label="Flight number"
                type="text"
                default="123456"
                value={form_data.flight_number}
                change={handle_change}
                max_length={6}
            />
            <Input
                label="Plane"
                value={getPlane(form_data.plane)}
                type="plane"
                change={handle_change}
            />
            <Input
                label="Departure Airport"
                type="airport"
                change={handle_change}
                value={form_data.departure_airport}
            />
            <Input
                label="Arrival Airport"
                type="airport"
                change={handle_change}
                value={form_data.arrival_airport}
            />
            <Input
                label="Departure date"
                type="date"
                value={form_data.departure_date}
                change={handle_change}
            />
            <Input
                label="Departure time"
                type="time"
                value={form_data.departure_time}
                change={handle_change}
            />
            <Input
                label="Flight time (min)"
                type="number"
                default="120"
                value={form_data.flight_time}
                max_length={3}
                change={handle_change}
            />
            <Input
                label="Price"
                type="number"
                default="$3000"
                value={form_data.price}
                max_length={5}
                change={handle_change}
            />
            <Container>
                <Spacer top="5" bottom="5">
                    <Button text="Save changes" icon="edit" fn={onClick} />
                </Spacer>
            </Container>
        </>
    );
}
