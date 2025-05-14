import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export default function EditCharacter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', abilities: '', origin: '' });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/characters/${id}`)
      .then(res => setFormData(res.data))
      .catch(() => setError('Failed to load character data'));
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValidated(true);

    axios.put(`http://localhost:5000/characters/${id}`, formData)
      .then(() => {
        setSuccess(true);
        setTimeout(() => navigate(`/characters/${id}`), 1000);
      })
      .catch(() => setError('Update failed.'));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-danger">Edit Character</h2>
      {error && <Alert variant="danger" dismissible>{error}</Alert>}
      {success && <Alert variant="success" dismissible>Character updated!</Alert>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control required name="name" value={formData.name} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAbilities">
          <Form.Label>Abilities</Form.Label>
          <Form.Control required name="abilities" value={formData.abilities} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Abilities are required.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formOrigin">
          <Form.Label>Origin</Form.Label>
          <Form.Control required name="origin" value={formData.origin} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">Origin is required.</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="danger">Update</Button>
      </Form>
    </Container>
  );
}