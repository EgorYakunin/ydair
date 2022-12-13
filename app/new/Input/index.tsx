import Spacer from '@/components/std/Spacer';
import Container from '@/components/std/Container';

export default function Input({ label }: { label: string }) {
    return (
        <>
            <Spacer top="1" />
            <hr />
            <Container>
                <Spacer top="1" />
                <p>{label}</p>
                <h2>11:30 PM</h2>
            </Container>
        </>
    );
}
