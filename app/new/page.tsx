"use client";
import Button from "@/components/Button";
import Spacer from "@/components/std/Spacer";
import Container from "@/components/std/Container";
import Input from "../../components/Input";
import form_controller from "./form_controller";
import PlaneSelect from "@/components/PlaneSelect";

export default function Page() {
    const { handle_change, onClick } = form_controller();

    return (
        <>
            <Spacer top="6" />
            <Input
                label="Flight number"
                type="text"
                default="123456"
                change={handle_change}
                max_length={6}
            />
            {/* <Input label="Plane" type="plane" change={handle_change} /> */}

            <PlaneSelect label="Plane" change={handle_change} />

            <Input
                label="Departure Airport"
                type="airport"
                change={handle_change}
            />
            <Input
                label="Arrival Airport"
                type="airport"
                change={handle_change}
            />
            <Input label="Departure date" type="date" change={handle_change} />
            <Input label="Departure time" type="time" change={handle_change} />
            <Input
                label="Flight time (min)"
                type="number"
                default="120"
                max_length={3}
                change={handle_change}
            />
            <Input
                label="Price"
                type="number"
                default="$3000"
                max_length={5}
                change={handle_change}
            />
            <Container>
                <Spacer top="5" bottom="5">
                    <Button text="Save changes" icon="edit" fn={onClick} />
                </Spacer>
            </Container>
        </>
    );
}
