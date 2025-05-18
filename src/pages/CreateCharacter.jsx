import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export default function CreateCharacter() {
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    alignment: '',
    powers: '',
    image_url: ''
  });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control required name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Alias</Form.Label>
          <Form.Control required name="alias" value={formData.alias} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Alignment</Form.Label>
          <Form.Select required name="alignment" value={formData.alignment} onChange={handleChange}>
            <option value="">Select</option>
            <option value="hero">Hero</option>
            <option value="villain">Villain</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Powers</Form.Label>
          <Form.Control required name="powers" value={formData.powers} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control required name="image_url" value={formData.image_url} onChange={handleChange} />
        </Form.Group>
        <Button type="submit" variant="danger">Create</Button>
      </Form>
    </Container>
  );
}