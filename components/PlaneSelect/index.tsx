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

export default function PlaneSelect(props: props) {
    const [planes, set_planes] = useState([]);

    useEffect(() => {
        fetch("/api/aircraft").then(res => {
            res.json().then(item => {
                const data = item.map((help: any) => {
                    const help2 = {
                        reg_number: help.reg_number,
                        id: help.id,
                    };

                    return help2;
                });

                set_planes(data);
            });
        });
    }, []);

    const options = planes.map((el: any) => {
        return (
            <option value={el.id} key={el.id}>
                {el.reg_number}
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
                    <option value="0">select</option>
                    {/* <option value="1">D-ATON</option>
                    <option value="2">N156FE</option> */}
                    {options}
                </select>
            </Container>
        </div>
    );
}
