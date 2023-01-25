"use client";
import Spacer from "@/components/std/Spacer";
import Container from "@/components/std/Container";
import { useEffect, useState } from "react";

type props = {
    label: string;
    change: (event: any) => void;
    default?: string;
    value?: string | number;
};

export default function AirportSelect(props: props) {
    const [airports, set_airports] = useState([]);

    useEffect(() => {
        fetch("/api/airport").then(res => {
            res.json().then(item => {
                const data = item.map((help: any) => {
                    const help2 = {
                        code: help.code,
                        id: help.id,
                    };

                    return help2;
                });

                set_airports(data);
            });
        });
    }, []);

    const options = airports.map((el: any) => {
        return (
            <option key={el.id}>
                {el.code}
            </option>
        );
    });

    return (
        <div>
            <Spacer top="1" />
            <hr />
            <Container>
                <Spacer top="1" />
                <p>{props.label}</p>

                <select
                    name={props.label}
                    value={props.value}
                    onChange={props.change}
                >
                    <option value={0}>XXX</option>
                    {options}
                </select>
            </Container>
        </div>
    );
}
