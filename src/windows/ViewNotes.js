import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ViewNotes = ({notes}) => {
  return (
    <Container>
        {  notes.map(note=> (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{note.note_title}</Card.Title>
                <Card.Text>
                {note.note_body}
                </Card.Text>
            </Card.Body>
            </Card>
        ))}
    </Container>
  )
}

export default ViewNotes