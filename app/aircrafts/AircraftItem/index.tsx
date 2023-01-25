import Row from "@/components/std/Row";

type props = {
    reg_number: string;
    name: string;
    id: number
    remove_plane: (id: number) => any
};

export default function AircraftItem(props: props) {

    return (
        <>
            <Row>
                <p>{props.reg_number}</p>
                <p>{props.name}</p>
                <div onClick={() => props.remove_plane(props.id)}>x</div>
            </Row>
        </>
    );
}
