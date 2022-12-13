import Spacer from '@/components/std/Spacer';
import Row from '@/components/std/Row';

import styles from './departure_arrival.module.css';
import Container from '@/components/std/Container';

import IDepartureArrival from './IDepartureArrival';

export default function DepartureArrival(props: IDepartureArrival) {
    return (
        <Container>
            <Spacer top="3"/>
            <Row>
                <p>{props.departure.city}</p>
                <p className={styles.right_align}>{props.arrival.city}</p>
            </Row>
            <Row>
                <h2>{props.departure.airport_code}</h2>
                <h2>{props.arrival.airport_code}</h2>
            </Row>
            <Row>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </Row>
            <Spacer top="1"/>
            <Row>
                <h5>{props.departure.time}</h5>
                <h5 className={styles.right_align}>{props.arrival.time}</h5>
            </Row>
            <Row>
                <p>{props.departure.date}</p>
                <p className={styles.right_align}>{props.arrival.date}</p>
            </Row>
            <Spacer bottom="4"/>
        </Container>
    );
}
