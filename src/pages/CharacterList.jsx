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
      .catch(err => {
        setError('Failed to fetch characters.');
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <Container className="mt-4">
      <h2 className="text-danger mb-4">All Characters</h2>
      <Row>
        {characters.map(char => (
          <Col md={6} lg={4} key={char.id} className="mb-4">
            <CharacterCard character={char} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
