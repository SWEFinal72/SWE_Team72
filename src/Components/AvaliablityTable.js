
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function AvailabilityTable() {
  return (
    <Container style={{ backgroundColor: "limegreen", width: '100%', display: "flex", justifyContent: "center", alignItems: 'center', minHeight: '30vh' }}>
      <Form style={{ display: 'block', padding: '20px', width: '80%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', gap: "40px", marginBottom: '20px' }}>
          <Form.Control style={{ width: '50%' }} type="text" placeholder="Pickup Location" />
          <Form.Control style={{ width: '50%' }} type="date" aria-label="Date" placeholder='Pickup Date' />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", gap: '40px' }}>
          <Form.Control style={{ width: '50%' }} type="text" placeholder="Dropoff Location" />
          <Form.Control style={{ width: '50%' }} type="date" aria-label="Date" placeholder='Pickup Date' />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <Button  variant="primary" type="submit">
            Find My Car
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AvailabilityTable;
