import Image from 'next/image';
import Container from '@/components/std/Container';
import Spacer from '@/components/std/Spacer';

import plane_illustation from '@/assets/img/7x.svg';
import half_plane_illustation from '@/assets/img/half.svg';
import styles from './test.module.css';

export default function Home() {
    return (
        <>
            <Spacer top="5" bottom="5"/>
            <Image
                src={half_plane_illustation}
                alt="Plane illustation"
                className={styles.img}
            />
            <Container>
                <p>New York</p>
                <h1>NYC</h1>
                <p>San Francisco</p>
                <h1>SFO</h1>
                <Image
                    src={plane_illustation}
                    alt="Plane illustation"
                    className={styles.img}
                />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet accusantium facere dicta voluptates est voluptatum
                    asperiores, corrupti recusandae aliquid. Eaque.
                </p>
            </Container>
            <Spacer bottom="25"/>
        </>
    );
}
