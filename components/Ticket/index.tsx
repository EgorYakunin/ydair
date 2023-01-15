import Row from '@/components/std/Row';
import Spacer from '../std/Spacer';

import styles from './ticket.module.css';

import ITicket from './ITicket';
import Container from '../std/Container';
import Link from 'next/link';

export default function Ticket(props: ITicket) {
    return (
        <Link href={"/ticket/" + props.id}>
            <Spacer top="1" />
            <hr />
            <Container>
                <Spacer top="1" />
                <h2 className={styles.price}>${props.price}</h2>
                <Spacer top="1" />
                <Row>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </Row>
                <Spacer top="1" />
                <Row>
                    <h5>{props.departure_time}</h5>
                    <h5 className={styles.right_align}>{props.arrival_time}</h5>
                </Row>
                <Row>
                    <p>{props.departure_airoport_code}</p>
                    <p className={styles.right_align}>
                        {props.arrival_airoport_code}
                    </p>
                </Row>
                <Spacer bottom="2" />
            </Container>
        </Link>
    );
}
