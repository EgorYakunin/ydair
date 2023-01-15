'use client';
import Image from 'next/image';
import Container from '@/components/std/Container';
import Spacer from '@/components/std/Spacer';
import plane_illustation from '@/assets/img/7x.svg';
import styles from './ticket.module.css';
import FlightDetail from './FlightDetail';
import DepartureArrival from './DepartureArrival';
import EditSection from './EditSection';

import barcode from './barcode.svg';
import IDepartureArrival from './DepartureArrival/IDepartureArrival';
import { useEffect, useState } from 'react';
import get_arrival_time from '@/lib/get_arrival_time';

interface IDefaultState {
    flight_number: string;
    departure_city: string;
    departure_code: string;
    departure_time: string;
    arrival_city: string;
    arrival_code: string;
    time: string;

    price: number;
    reg_number: string;
}

export default function Page({ params }: { params: { ticketid: string } }) {
    const default_state: IDefaultState = {
        departure_city: '',
        departure_code: '',
        departure_time: '',
        arrival_city: '',
        arrival_code: '',
        time: '',
        flight_number: '',

        price: 0,
        reg_number: ""
    };

    const [ticketData, setTicketData] = useState(default_state);

    useEffect(() => {
        fetch('/api/find', {
            method: 'POST',
            body: JSON.stringify({ id: params.ticketid }),
        }).then(res => {
            res.json().then(answer => {
                setTicketData({
                    ...answer[0],
                    reg_number: answer[0].plane.reg_number,
                    time: get_arrival_time(
                        answer[0].departure_time,
                        answer[0].flight_time
                    ),
                });
            });
        });
    }, []);

    const dummy_data: IDepartureArrival = {
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
        departure_city: '',
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
                flight_number={ticketData.flight_number}
                price={ticketData.price}
                aircraft_number={ticketData.reg_number}
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
            <EditSection />
            <Spacer bottom="10" />
        </>
    );
}
