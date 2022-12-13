//! You can only use <Button/> in client conponent

import IButton from './IButton';
import styles from './button.module.css';
import Image from 'next/image';
import Row from '@/components/std/Row';

import delete_icon from './icons/delete.svg';
import edit_icon from './icons/edit.svg';

export default function Button(props: IButton) {
    const icon_path = props.icon === 'edit' ? edit_icon : delete_icon;

    return (
        <div className={props.fixed ? styles.fixed : ""}>
            <div className={styles.btn} onClick={props.fn}>
                <Row>
                    <Image
                        src={icon_path}
                        alt="button icon"
                        width="10"
                        height="10"
                    />
                    <h4>{props.text}</h4>
                </Row>
            </div>
        </div>
    );
}
