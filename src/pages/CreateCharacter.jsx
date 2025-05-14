import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export default function CreateCharacter() {
  const [formData, setFormData] = useState({ name: '', abilities: '', origin: '' });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;

  if (!form.checkValidity()) {
    e.stopPropagation();
    setValidated(true);
    return;
  }

  setValidated(true); 

  axios.post('http://localhost:5000/characters', formData)
    .then(() => {
      setSuccess(true);
      setTimeout(() => navigate('/characters'), 1000);
    })
    .catch(() => setError('Create failed.'));
};


  return (
    <Container className="mt-4">
      <h2 className="text-danger">Create New Character</h2>
      {error && <Alert variant="danger" dismissible>{error}</Alert>}
      {success && <Alert variant="success" dismissible>Character created!</Alert>}
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
        <Button type="submit" variant="danger">Create</Button>
      </Form>
    </Container>
  );
}
