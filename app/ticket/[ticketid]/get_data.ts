import get_arrival_time from "@/lib/get_arrival_time";
import ITicketData from "./ITicketData";

export default async function get_data(params: { ticketid: string }) {
    const raw_data = await fetch("http://192.168.0.26:3000/api/search", {
        method: "POST",
        body: JSON.stringify({id: params.ticketid}),
    });

    if (!raw_data.ok) {
        throw new Error('Failed to fetch data');
    }

    const res = await raw_data.json();

    const final_data: ITicketData = {
        departure_city: res.departure_city,
        departure_code: res.departure_code,
        departure_time: res.departure_time,
        arrival_city: res.arrival_city,
        arrival_code: res.arrival_code,
        flight_number: res.flight_number,
        price: res.price,
        reg_number: res.plane.reg_number,
        name: res.plane.name,
        time: get_arrival_time(res.departure_time, res.flight_time),
    };

    return final_data;
}
