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
import Input from "@/components/Input";
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
        fetch("/api/find", {
            method: "POST",
            body: JSON.stringify({ arr_code, dep_code }),
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
                <Input
                    label="Departure city"
                    type="airport"
                    change={function (event: any): void {
                        const arr_code =
                            document.getElementsByName("Arrival city")[0].value;
                        const dep_code =
                            document.getElementsByName("Departure city")[0]
                                .value;

                        filter_tickets(arr_code, dep_code);
                    }}
                />
                <Input
                    label="Arrival city"
                    type="airport"
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
