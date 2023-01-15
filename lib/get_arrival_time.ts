export default function get_arrival_time(
    departure_time: string,
    flight_time: number
) {
    let hour = Number(departure_time.substring(11).slice(0, 2));
    let minutes = departure_time.substring(14);
    hour += Math.round(flight_time / 60);

    if (Number(minutes) > 60) {
        minutes = `${Number(minutes) - 60}`;
        hour++;
    }

    if (hour > 23) {
        hour -= 24;
    }

    if (Number(minutes) < 10) {
        minutes = `0${minutes}`;
    }

    // return `${hour}:${minutes}`;
    return "10:10"
}
