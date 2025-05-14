import React from 'react';
import { Alert, Container } from 'react-bootstrap';

export default function Error({ message }) {
  return (
    <Container className="mt-4">
      <Alert variant="danger">
        {message || 'An unexpected error occurred.'}
      </Alert>
    </Container>
  );
}