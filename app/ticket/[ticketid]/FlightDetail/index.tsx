import Spacer from '@/components/std/Spacer';
import Container from '@/components/std/Container';
import IFlightDedails from './IFlightDetails';

export default function FlightDetail(props: IFlightDedails) {
    return (
        <>
            <Spacer top="1" />
            <hr />
            <Container>
                <Spacer top="1" />
                <p>Flight number</p>
                <h2>{props.flight_number}</h2>
            </Container>
            <hr />
            <Container>
                <Spacer top="1" />
                <p>Price</p>
                <h2>${props.price}</h2>
            </Container>
            <hr />
            <Container>
                <Spacer top="1" />
                <p>Aircraft number</p>
                <h2>{props.aircraft_number}</h2>
            </Container>
            <hr />
            <Container>
                <Spacer top="1" />
                <p>Plane</p>
                <h2>{props.plane}</h2>
            </Container>
            <hr />
        </>
    );
}
