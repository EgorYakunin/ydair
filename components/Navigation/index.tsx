'use client';
import styles from './header.module.css';

import logo from './logo.svg';
import Image from 'next/image';
import Menu from './Menu';
import toggle_menu from './toggle_menu';

export default function Navigation() {
    const { is_open, toggle } = toggle_menu(false);

    return (
        <div className={styles.navigation} onClick={toggle}>
            <div className={styles.header}>
                <Image src={logo} alt="logo" />
                <h4>Yakunin Airlines</h4>
            </div>
            {is_open && <Menu />}
        </div>
    );
}
