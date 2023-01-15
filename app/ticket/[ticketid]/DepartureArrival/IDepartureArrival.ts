export default interface IDepartureArrival  {
    departure_city: string
    departure: {
        time: string,
        city: string,
        airport_code: string
    },
    arrival: {
        time: string,
        city: string,
        airport_code: string
    }
}