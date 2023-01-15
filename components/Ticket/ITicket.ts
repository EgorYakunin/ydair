export default interface ITicket {
    id: number,
    flight_number: string,
    price: number,
    departure_time: string,
    arrival_time: string,
    departure_airoport_code: string,
    arrival_airoport_code: string
}