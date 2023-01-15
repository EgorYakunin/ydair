'use client';
import Button from "@/components/Button";
import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";

export default function EditSection() {
    return (
        <Container>
            <Button text="edit" icon="edit" fn={() => console.log('edit')} />
            <Spacer top="1"/>
            <Button text="delete" icon="delete" fn={() => console.log('delete')} />
        </Container>
    )
}