import Image from "next/image";
import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";
import plane_illustation from "@/assets/img/7x.svg";
import styles from "./ticket.module.css";
import FlightDetail from "./FlightDetail";
import DepartureArrival from "./DepartureArrival";
import EditSection from "./EditSection";
import barcode from "./barcode.svg";
import IDepartureArrival from "./DepartureArrival/IDepartureArrival";

import get_data from "./get_data";

export default async function Page({
    params,
}: {
    params: { ticketid: string };
}) {
    const ticketData = await get_data(params);

    const dummy_data: IDepartureArrival = {
        price: ticketData.price,
        flight_number: ticketData.flight_number,
        aircraft: {
            reg_number: ticketData.reg_number,
            name: ticketData.name,
        },
        departure: {
            city: ticketData.departure_city,
            airport_code: ticketData.departure_code,
            time: ticketData.departure_time,
        },
        arrival: {
            city: ticketData.arrival_city,
            airport_code: ticketData.arrival_code,
            time: ticketData.time,
        },
    };

    return (
        <>
            <Container>
                <Image
                    src={plane_illustation}
                    alt="Plane illustation"
                    className={styles.img}
                />
            </Container>

            <DepartureArrival {...dummy_data} />

            <FlightDetail
                flight_number={dummy_data.flight_number}
                price={dummy_data.price}
                aircraft_number={dummy_data.aircraft.reg_number}
                plane={dummy_data.aircraft.name}
            />

            <Container>
                <Spacer top="3" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet accusantium facere dicta voluptates est voluptatum
                    asperiores, corrupti recusandae aliquid. Eaque.
                </p>

                <Spacer top="3" />
                <Image
                    src={barcode}
                    alt="ticket barcode"
                    className={styles.img}
                />
            </Container>
            <Spacer bottom="2" />
            <EditSection id={params.ticketid} ticket_data={ticketData} />
            <Spacer bottom="10" />
        </>
    );
}
