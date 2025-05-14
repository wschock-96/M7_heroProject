import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <Card className="h-100 border-danger shadow-sm">
      <Card.Body>
        <Card.Title className='text-danger fw-bold'>{character.name}</Card.Title>
        <Card.Text>
          <strong>Abilities:</strong> {character.abilities}<br />
          <strong>Origin:</strong> {character.origin}
        </Card.Text>
        <Button variant="primary outline-danger" onClick={() => navigate(`/characters/${character.id}`)}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
}