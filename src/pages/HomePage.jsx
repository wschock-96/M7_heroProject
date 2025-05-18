import React from 'react';
import { Container } from 'react-bootstrap';

export default function HomePage() {
  return (
    <Container className="mt-5 text-center">
      <h1 className="text-danger fw-bold display-5 mb-3">Welcome to Marvel DB</h1>
      <p className="text-muted fs-5">Browse, create, and manage your favorite Marvel heroes and villains.</p>
    </Container>
  );
}
