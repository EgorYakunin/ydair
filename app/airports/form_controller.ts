import { useState } from "react";
import { useRouter } from "next/navigation";

export default function form_controller() {
    const [add_data, setAddData] = useState({
        city: "",
        code: "",
    });

    const router = useRouter();

    function onSubmit() {
        const err = [];

        add_data.city === "" && err.push("city");
        add_data.code === "" && err.push("code");

        if (err.length > 0) {
            return alert("Some input is missing value");
        }

        fetch("/api/add_airport", {
            method: "POST",
            body: JSON.stringify(add_data),
        }).then(res => {
            res.json().then(answer => {
                if (answer.res === "ok") {
                    window.location.reload();
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

        name === "City" && change_state("city", value);
        name === "Code" && change_state("code", value);
    }

    return {
        onSubmit,
        handle_change,
    };
}
