import Link from "next/link";
import Spacer from "@/components/std/Spacer";
import styles from "./menu.module.css";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Link href="/">
                <p className={styles.menu_item}>ALL FLIGHTS</p>
            </Link>
            <Spacer top="3" />
            <Link href="/new">
                <p className={styles.menu_item}>NEW FLIGHT</p>
            </Link>
            <Spacer top="3" />
            <Link href="/airports">
                <p className={styles.menu_item}>AIRPORTS</p>
            </Link>
            <Spacer top="3" />
            <Link href="/aircrafts">
                <p className={styles.menu_item}>AIRCRAFTS</p>
            </Link>
            <Spacer bottom="2" />
        </div>
    );
}
