"use client";
import Button from "@/components/Button";
import Spacer from "@/components/std/Spacer";
import Container from "@/components/std/Container";
import Input from "../../components/Input";
import Row from "@/components/std/Row";
import get_aircraft from "./get_airport";
import form_controller from "./form_controller";
import AirportItem from "./AirportItem";

export default function Page() {
    const { airport, remove_airport } = get_aircraft();
    const { onSubmit, handle_change } = form_controller();

    const aircrafts = airport.map((el: any) =>
        AirportItem({ ...el, remove_airport })
    );

    return (
        <>
            <Container>
                <h2>Airports</h2>
                <Spacer top="2" />
                <Row>
                    <b>Code</b>
                    <b>City</b>
                    <b>Delete</b>
                </Row>
                <Spacer top="1" />
                {aircrafts}

                <Spacer top="4" />
                <h2>New Airport</h2>
                <Spacer top="2" />
                <Input
                    type="text"
                    label="Code"
                    max_length={6}
                    change={handle_change}
                />
                <Input
                    type="text"
                    label="City"
                    change={handle_change}
                />
                <Spacer top="3" />
                <Button text="Save Airport" icon="edit" fn={onSubmit} />
                <Spacer top="5" />
            </Container>
        </>
    );
}
