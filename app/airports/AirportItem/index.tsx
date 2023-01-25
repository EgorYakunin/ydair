import Row from "@/components/std/Row";

type props = {
    code: string;
    city: string;
    id: number
    remove_airport: (id: number) => any
};

export default function AirportItem(props: props) {
    return (
        <>
            <Row>
                <p>{props.code}</p>
                <p>{props.city}</p>
                <div onClick={() => props.remove_airport(props.id)}>x</div>
            </Row>
        </>
    );
}
