import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/characters')
      .then(res => {
        setCharacters(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch characters.');
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <Container className="py-4">
      <h2 className="text-danger mb-4 text-center">Marvel Characters</h2>
      <Row className="g-4">
        {characters.length > 0 ? characters.map(char => (
          <Col md={6} lg={4} key={char.id}>
            <CharacterCard character={char} />
          </Col>
        )) : (
          <p className="text-center text-muted">No characters found.</p>
        )}
      </Row>
    </Container>
  );
}
