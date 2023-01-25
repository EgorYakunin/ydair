import { useState } from "react";
import { useRouter } from "next/navigation";

export default function form_controller() {
    const [add_data, setAddData] = useState({
        fl_num: "",
        arr_id: 0,
        dep_id: 0,
        dep_time: 0,
        dep_date: 0,
        time: 0,
        price: 0,
        plane_id: 0,
    });

    const router = useRouter();

    function onClick() {
        const err = [];

        add_data.fl_num == "" && err.push("fl_num");
        add_data.arr_id == 0 && err.push("arr_id");
        add_data.dep_id == 0 && err.push("dep_id");
        add_data.dep_time == 0 && err.push("dep_time");
        add_data.dep_date == 0 && err.push("dep_date");
        add_data.time == 0 && err.push("time");
        add_data.price == 0 && err.push("price");
        add_data.plane_id == 0 && err.push("plane_id");

        if (err.length > 0) {
            alert("Some input is missing value");
        } else {
            const send_data = {
                ...add_data,
                dep_time: add_data.dep_date + " " + add_data.dep_time,
            };
            // delete send_data.dep_date;

            fetch("/api/add", {
                method: "POST",
                body: JSON.stringify(send_data),
            }).then(res => {
                res.json().then(answer => {
                    if (answer.res == "ok") {
                        router.push("/");
                    }
                });
            });

        }
    }

    function change_state(name: string, value: any) {
        setAddData(prev => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    function handle_change(event: any) {
        const { name, value } = event.target;

        name === "Flight number" && change_state("fl_num", value);
        name === "Plane" && change_state("plane_id", value);

        name === "Departure Airport" && change_state("dep_id", value);
        name === "Arrival Airport" && change_state("arr_id", value);

        name === "Flight time (min)" && change_state("time", value);
        name === "Price" && change_state("price", value);

        name === "Departure time" && change_state("dep_time", value);
        name === "Departure date" && change_state("dep_date", value);
    }

    return {
        onClick,
        handle_change,
    };
}
