import React from 'react';
import { Container } from 'react-bootstrap';

export default function NotFoundPage() {
  return (
    <Container className="mt-5 text-center">
      <h2 className="text-danger">404 - Page Not Found</h2>
      <p className="text-muted">The page you're looking for doesn't exist.</p>
    </Container>
  );
}
