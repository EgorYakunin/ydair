export default interface IDepartureArrival  {
    flight_number: string,
    price: number,
    aircraft: {
        reg_number: string,
        name: string
    }
    departure: {
        time: string,
        city: string,
        airport_code: string
    },
    arrival: {
        time: string,
        city: string,
        airport_code: string
    },
}