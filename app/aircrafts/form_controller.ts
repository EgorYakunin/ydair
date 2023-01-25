import { useState } from "react";
import { useRouter } from "next/navigation";

export default function form_controller() {
    const [add_data, setAddData] = useState({
        reg_number: "",
        plane_name: "",
        airline: "",
    });

    const router = useRouter();

    function onSubmit() {
        const err = [];

        add_data.reg_number === "" && err.push("reg_number");
        add_data.plane_name === "" && err.push("plane_name");
        add_data.airline === "" && err.push("airline");

        if (err.length > 0) {
            return alert("Some input is missing value");
        }

        fetch("/api/add_plane", {
            method: "POST",
            body: JSON.stringify(add_data),
        }).then(res => {
            res.json().then(answer => {
                if (answer.res === "ok") {
                    router.push("/aircrafts");
                }
            });
        });
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

        name === "Reg number" && change_state("reg_number", value);
        name === "Plane name" && change_state("plane_name", value);
        name === "Airline" && change_state("airline", value);
    }

    return {
        onSubmit,
        handle_change,
    };
}
