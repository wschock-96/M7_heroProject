import React from 'react';
import { Spinner, Container } from 'react-bootstrap';

export default function Loading() {
  return (
    <Container className="text-center mt-4">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}