import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="text-danger fw-bold">{character.name}</Card.Title>
        <Card.Text>
          <strong>Alias:</strong> {character.alias}<br />
          <strong>Alignment:</strong> {character.alignment}<br />
          <strong>Powers:</strong> {character.powers}<br />
          <strong>Image:</strong> <a href={character.image_url} target="_blank" rel="noopener noreferrer">View</a>
        </Card.Text>
        <Button variant="outline-danger" onClick={() => navigate(`/characters/${character.id}`)}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}