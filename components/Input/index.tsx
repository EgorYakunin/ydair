import Spacer from "@/components/std/Spacer";
import Container from "@/components/std/Container";

type input_type = "text" | "date" | "time" | "number";
import styles from "./input.module.css";

type props = {
    type: input_type;
    label: string;
    change: (event: any) => void;
    default?: string;
    max_length?: number;
    value?: string | number;
};

export default function Input(props: props) {
    return (
        <>
            <Spacer top="1" />
            <hr />
            <Container>
                <Spacer top="1" />
                <p>{props.label}</p>
                {props.type === "text" && (
                    <input
                        type="text"
                        value={props.value}
                        placeholder={props.default}
                        name={props.label}
                        maxLength={props.max_length}
                        onChange={props.change}
                    />
                )}
                {/* {props.type === "airport" && (
                    <select name={props.label} value={props.value} onChange={props.change}>
                        <option value="">XXX</option>
                        <option>LED</option>
                        <option>LAX</option>
                        <option>JNK</option>
                        <option>SFO</option>
                        <option>NSK</option>
                    </select>
                )} */}
                {props.type === "date" && (
                    <input
                        type="text"
                        value={props.value}
                        placeholder="16 Jan 2023"
                        name={props.label}
                        onChange={props.change}
                    />
                )}
                {props.type === "time" && (
                    <input
                        type="text"
                        value={props.value}
                        placeholder="13:30"
                        maxLength={5}
                        name={props.label}
                        onChange={props.change}
                    />
                )}
                {props.type === "number" && (
                    <input
                        type="tel"
                        value={props.value}
                        placeholder={props.default}
                        maxLength={props.max_length}
                        name={props.label}
                        onChange={props.change}
                    />
                )}
            </Container>
        </>
    );
}
