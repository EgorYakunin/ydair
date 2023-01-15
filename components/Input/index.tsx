import Spacer from '@/components/std/Spacer';
import Container from '@/components/std/Container';

type input_type = 'text' | 'plane' | 'airport' | 'date' | 'time' | 'number';
import styles from './input.module.css';

type props = {
    type: input_type;
    label: string;
    change: (event: any) => void;
    default?: string;
};

export default function Input(props: props) {
    return (
        <>
            <Spacer top="1" />
            <hr />
            <Container>
                <Spacer top="1" />
                <p>{props.label}</p>
                {props.type === 'text' && (
                    <input type="text" placeholder={props.default} name={props.label} onChange={props.change}/>
                )}
                {props.type === 'plane' && (
                    <select name={props.label} onChange={props.change}>
                        <option value="1">D-ATON</option>
                        <option value="2">N156FE</option>
                        <option value="3">N728FD</option>
                        <option value="4">N724LA</option>
                        <option value="5">N913NK</option>
                    </select>
                )}
                {props.type === 'airport' && (
                    <select name={props.label} onChange={props.change}>
                        <option>LED</option>
                        <option>LAX</option>
                        <option>JNK</option>
                        <option>SFO</option>
                        <option>NSK</option>
                    </select>
                )}
                {props.type === 'date' && <input type="text" placeholder="16 Jan 2023" name={props.label} onChange={props.change}/>}
                {props.type === 'time' && <input type="text" placeholder="13:30" name={props.label} onChange={props.change}/>}
                {props.type === 'number' && <input type="tel" placeholder={props.default} name={props.label} onChange={props.change}/>}
            </Container>
        </>
    );
}
