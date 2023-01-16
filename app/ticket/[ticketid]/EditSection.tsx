"use client";
import Button from "@/components/Button";
import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";
import get_flight_time from "@/lib/get_flight_time";
import { useRouter } from "next/navigation";

import ITicketData from "./ITicketData";

type props = {
    id: string;
    ticket_data: ITicketData;
};

export default function EditSection(props: props) {
    const router = useRouter();

    function delete_flight() {
        const res = fetch("/api/delete", {
            method: "post",
            body: JSON.stringify(props.id),
        }).then(() => router.push("/"));
    }

    function edit_redirect() {
        const ticket_data = props.ticket_data;

        const fl_num = ticket_data.flight_number;
        const plane = ticket_data.reg_number;
        const dep_airport = ticket_data.departure_code;
        const arr_airport = ticket_data.arrival_code;
        const dep_date = ticket_data.departure_time.substring(0, 12);
        const dep_time = ticket_data.departure_time.substring(12, 17);
        const flight_time = get_flight_time(dep_time, ticket_data.time);
        const price = ticket_data.price;

        const query_uri = `edit/${props.id}?flight_number=${fl_num}&plane=${plane}&departure_airport=${dep_airport}&arrival_airport=${arr_airport}&departure_date=${dep_date}&departure_time=${dep_time}&flight_time=${flight_time}&price=${price}`;

        router.push(query_uri);
    }

    return (
        <Container>
            <Button text="edit" icon="edit" fn={edit_redirect} />
            <Spacer top="1" />
            <Button text="delete" icon="delete" fn={delete_flight} />
        </Container>
    );
}
