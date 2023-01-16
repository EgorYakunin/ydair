export default function get_flight_time(
    departure_time: string,
    arrival_time: string
) {
    const hours =
        Number(arrival_time.substring(0, 2)) -
        Number(departure_time.substring(0, 2));

    const minutes =
        Number(arrival_time.substring(3, 5)) -
        Number(departure_time.substring(3, 5));

    const flight_time = hours * 60 + minutes;

    return flight_time;
}
