'use client';

import Button from '@/components/Button';
import Spacer from '@/components/std/Spacer';
import Container from '@/components/std/Container';
import Input from './Input';

export default function Page() {
    function onClick() {
        console.log('bruh');
    }

    return (
        <>
            <Spacer top="6" />
            <Input label="Arrival time" />
            <Input label="Arrival time" />
            <Input label="Arrival time" />
            <Input label="Arrival time" />
            <Input label="Arrival time" />
            <Input label="Arrival time" />
            <Input label="Arrival time" />
            <Input label="Arrival time" />
            <Container>
                <Spacer top="5" bottom="5">
                    <Button text="Save changes" icon="edit" fn={onClick} />
                </Spacer>
            </Container>
        </>
    );
}
