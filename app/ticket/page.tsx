import Image from 'next/image';
import Container from '@/components/std/Container';
import Spacer from '@/components/std/Spacer';
import plane_illustation from '@/assets/img/7x.svg';
import styles from './ticket.module.css';
import FlightDetail from './FlightDetail';
import DepartureArrival from './DepartureArrival';

import barcode from './barcode.svg';
import IDepartureArrival from './DepartureArrival/IDepartureArrival';

export default function Page() {

    const dummy_data: IDepartureArrival = {
        departure: {
            city: "New York",
            airport_code: "NYC",
            time: "10:30 AM",
            date: "11 Dec"
        },
        arrival: {
            city: "San Francisco",
            airport_code: "SFO",
            time: "04:30 PM",
            date: "12 Dec"
        }
    }

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
                flight_number="WN597"
                price={289}
                aircraft_number="N8793Q"
            />

            <Container>
                <Spacer top="3" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet accusantium facere dicta voluptates est voluptatum
                    asperiores, corrupti recusandae aliquid. Eaque.
                </p>

                <Spacer top="3" />
                <Image src={barcode} alt="ticket barcode" className={styles.img} />
            </Container>

            <Spacer bottom="10" />
        </>
    );
}
