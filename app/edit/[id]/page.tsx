"use client";
import Button from "@/components/Button";
import Spacer from "@/components/std/Spacer";
import Container from "@/components/std/Container";
import Input from "@/components/Input";
import form_controller from "./form_controller";
import AirportSelect from "@/components/AirportSelect";
import PlaneSelect from "@/components/PlaneSelect";

export default function Page({ params }: { params: { id: string } }) {
    const { handle_change, onClick, form_data, getPlane } = form_controller();

    return (
        <>
            <Spacer top="6" />
            <Input
                label="Flight number"
                type="text"
                default="123456"
                value={form_data.flight_number}
                change={handle_change}
                max_length={6}
            />
            <PlaneSelect
                label="Plane"
                value={getPlane(form_data.plane)}
                change={handle_change}
            />
            <AirportSelect
                label="Departure Airport"
                change={handle_change}
                value={form_data.departure_airport}
            />
            <AirportSelect
                label="Arrival Airport"
                change={handle_change}
                value={form_data.arrival_airport}
            />
            <Input
                label="Departure date"
                type="date"
                value={form_data.departure_date}
                change={handle_change}
            />
            <Input
                label="Departure time"
                type="time"
                value={form_data.departure_time}
                change={handle_change}
            />
            <Input
                label="Flight time (min)"
                type="number"
                default="120"
                value={form_data.flight_time}
                max_length={3}
                change={handle_change}
            />
            <Input
                label="Price"
                type="number"
                default="$3000"
                value={form_data.price}
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
