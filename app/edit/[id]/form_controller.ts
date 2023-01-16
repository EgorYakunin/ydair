import { useEffect, useState } from "react";
import parse_query_string from "@/lib/parse_query";
import { useRouter } from "next/navigation";

interface ITicketData {
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    departure_date: string;
    flight_number: string;
    flight_time: number;
    price: number;
    plane: string;
}

export default function form_controller() {
    const router = useRouter();

    function getQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        let params = parse_query_string(urlParams.toString());

        //@ts-ignore
        params.departure_date = params.departure_date.replace(/\+/gi, " ");

        return params;
    }

    function getPlane(airport: string) {
        if (airport == "D-ATON") {
            return 1;
        }
        if (airport == "N156FE") {
            return 2;
        }
        if (airport == "N728FD") {
            return 3;
        }
        if (airport == "N724LA") {
            return 4;
        }
        if (airport == "N913NK") {
            return 5;
        }
    }

    const [form_data, set_form_data] = useState<ITicketData>({
        departure_airport: "",
        arrival_airport: "",
        departure_time: "",
        departure_date: "",
        flight_number: "",
        flight_time: 0,
        price: 0,
        plane: "",
    });

    useEffect(() => {
        //@ts-ignore
        set_form_data(getQuery);
    }, []);

    function change_state(name: string, value: any) {
        set_form_data(prev => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    function handle_change(event: any) {
        const { name, value } = event.target;

        name === "Flight number" && change_state("flight_number", value);
        name === "Plane" && change_state("plane", value);

        name === "Departure Airport" &&
            change_state("departure_airport", value);
        name === "Arrival Airport" && change_state("arrival_airport", value);

        name === "Flight time (min)" && change_state("flight_time", value);
        name === "Price" && change_state("price", value);

        name === "Departure time" && change_state("departure_time", value);
        name === "Departure date" && change_state("departure_date", value);
    }

    function onClick() {
        const id = window.location.href.split("/")[4].split("?")[0];

        const data = {
            id,
            flight_data: form_data
        }

        console.log(data);

        fetch("/api/update", {
            method: "POST",
            body: JSON.stringify(data),
        }).then(res => {
            router.push(`/ticket/${id}`);
        });
    }

    return {
        form_data,
        getPlane,
        handle_change,
        onClick,
    };
}
