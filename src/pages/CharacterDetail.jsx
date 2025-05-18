import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, Card } from 'react-bootstrap';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/characters/${id}`)
      .then(res => {
        setCharacter(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Character not found.');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/characters/${id}`)
      .then(() => navigate('/characters'))
      .catch(() => alert('Delete failed'));
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <Container className="mt-4">
      <Card bg="dark" text="light" className="shadow-lg rounded-4">
        <Card.Body>
          <Card.Title className="text-danger fw-bold fs-3">{character.name}</Card.Title>
          <Card.Text className="mb-3">
            <strong>Abilities:</strong> {character.abilities}<br />
            <strong>Origin:</strong> {character.origin}
          </Card.Text>
          <Button variant="outline-light" onClick={() => navigate(`/edit/${character.id}`)} className="me-2">
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
