// @ts-nocheck
"use client";
import Image from "next/image";
import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";

import { useEffect, useState } from "react";
import get_arrival_time from "@/lib/get_arrival_time";

import half_plane_illustation from "@/assets/img/half.svg";
import Ticket from "@/components/Ticket";
import ITicket from "@/components/Ticket/ITicket";
import AirportSelect from "@/components/AirportSelect";
import styles from "./test.module.css";

interface tmp_ticket {
    id: number;
    flight_number: string;
    price: number;
    departure_time: string;
    flight_time: number;
    departure_code: string;
    arrival_code: string;
}

export default function Home() {
    const [tickets, set_tickets] = useState([]);

    const ticket_list = tickets.map((ticket: tmp_ticket) => {
        const ticket_data: ITicket = {
            id: ticket.id,
            flight_number: ticket.flight_number,
            price: ticket.price,
            departure_time: ticket.departure_time.substring(11),
            arrival_time: get_arrival_time(
                ticket.departure_time,
                ticket.flight_time
            ),
            departure_airoport_code: ticket.departure_code,
            arrival_airoport_code: ticket.arrival_code,
        };

        return <Ticket {...ticket_data} />;
    });

    useEffect(() => {
        fetch("/api/find", {
            method: "POST",
            body: JSON.stringify({}),
        }).then(res => {
            res.json().then(response => {
                set_tickets(response);
            });
        });
    }, []);

    function filter_tickets(arr_code: string, dep_code: string) {

        let body = {arr_code, dep_code};

        if (arr_code == 0) delete body.arr_code
        if (dep_code == 0) delete body.dep_code

        fetch("/api/find", {
            method: "POST",
            body: JSON.stringify(body),
        }).then(res => {
            res.json().then(response => {
                set_tickets(response);
            });
        });
    }

    return (
        <>
            <Image
                src={half_plane_illustation}
                alt="Plane illustation"
                className={styles.half_img}
            />
            <Spacer bottom="7" />
            <Container>
                <AirportSelect
                    label="Departure city"
                    change={function (event: any): void {
                        const arr_code =
                            document.getElementsByName("Arrival city")[0].value;
                        const dep_code =
                            document.getElementsByName("Departure city")[0]
                                .value;

                        filter_tickets(arr_code, dep_code);
                    }}
                />
                <AirportSelect
                    label="Arrival city"
                    change={function (event: any): void {
                        const arr_code =
                            document.getElementsByName("Arrival city")[0].value;
                        const dep_code =
                            document.getElementsByName("Departure city")[0]
                                .value;

                        filter_tickets(arr_code, dep_code);
                    }}
                />
                <Spacer bottom="7" />
            </Container>
            {ticket_list}
            <Spacer bottom="25" />
        </>
    );
}
