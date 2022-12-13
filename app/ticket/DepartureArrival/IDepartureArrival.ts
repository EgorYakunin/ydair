export default interface IDepartureArrival  {
    departure: {
        date: string,
        time: string,
        city: string,
        airport_code: string
    },
    arrival: {
        date: string,
        time: string,
        city: string,
        airport_code: string
    }
}