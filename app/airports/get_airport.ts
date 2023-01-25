import { useEffect, useState } from "react";

export default function get_airport() {
    function remove_airport(id: number) {
        fetch("/api/delete_airport", {
            method: "POST",
            //@ts-ignore
            body: JSON.stringify({ id }),
        }).then(res => {
            //@ts-ignore
            const new_airport = airport.filter(port => port.id != id);
            set_airport(new_airport);
        });
    }

    const [airport, set_airport] = useState([]);

    useEffect(() => {
        fetch("/api/airport").then((res: any) => {
            res.json().then((data: any) => {
                set_airport(data);
            });
        });
    }, []);

    return { airport, remove_airport};
}
