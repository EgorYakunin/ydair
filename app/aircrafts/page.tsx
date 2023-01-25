"use client";
import Button from "@/components/Button";
import Spacer from "@/components/std/Spacer";
import Container from "@/components/std/Container";
import Input from "../../components/Input";
import AircraftItem from "./AircraftItem";
import Row from "@/components/std/Row";
import get_aircraft from "./get_aircraft";
import form_controller from "./form_controller";

export default function Page() {
    const { aircraft, remove_plane } = get_aircraft();
    const { onSubmit, handle_change } = form_controller();

    const aircrafts = aircraft.map((el: any) =>
        AircraftItem({ ...el, remove_plane })
    );

    return (
        <>
            <Container>
                <h2>Aircrafts</h2>
                <Spacer top="2" />
                <Row>
                    <b>Reg Number</b>
                    <b>Name</b>
                    <b>Delete</b>
                </Row>
                <Spacer top="1" />
                {aircrafts}

                <Spacer top="4" />
                <h2>Add aircraft</h2>
                <Spacer top="2" />
                <Input
                    type="text"
                    label="Reg number"
                    max_length={6}
                    change={handle_change}
                />
                <Input
                    type="text"
                    label="Plane name"
                    change={handle_change}
                />
                <Input
                    type="text"
                    label="Airline"
                    change={handle_change}
                />
                <Spacer top="3" />
                <Button text="Save Aircraft" icon="edit" fn={onSubmit} />
                <Spacer top="5" />
            </Container>
        </>
    );
}
