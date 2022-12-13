import Link from 'next/link';
import Spacer from '@/components/std/Spacer';
import styles from "./menu.module.css";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Link href="/">
                <p className={styles.menu_item}>ALL FLIGHTS</p>
            </Link>
            <Spacer top="3"/>
            <Link href="/new">
                <p className={styles.menu_item}>NEW FLIGHT</p>
            </Link>
            <Spacer top="3"/>
            <Link href="/ticket">
                <p className={styles.menu_item}>CONTACT</p>
            </Link>
            <Spacer bottom="2"/>
        </div>
    );
}
