import React from 'react';
import { Container } from 'react-bootstrap';

export default function HomePage() {
  return (
    <Container className="mt-5 text-center">
      <h1 className="text-danger fw-bold">Welcome to the Marvel Character Database</h1>
      <p className="text-muted">Use the navigation to view, create, or edit your favorite heroes and villains.</p>
    </Container>
  );
}