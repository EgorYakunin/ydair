import { useEffect, useState } from "react";

export default function get_aircraft() {
    function remove_plane(id: number) {
        fetch("/api/delete_aircraft", {
            method: "POST",
            //@ts-ignore
            body: JSON.stringify({ id }),
        }).then(res => {
            if (res.status == 400) {
                return alert("Aircraft has active flight!");
            }
            //@ts-ignore
            const new_aircraft = aircraft.filter(plane => plane.id != id);
            set_aircraft(new_aircraft);
        });
    }

    const [aircraft, set_aircraft] = useState([]);

    useEffect(() => {
        fetch("/api/aircraft").then((res: any) => {
            res.json().then((data: any) => {
                set_aircraft(data);
            });
        });
    }, []);

    return { aircraft, remove_plane};
}
