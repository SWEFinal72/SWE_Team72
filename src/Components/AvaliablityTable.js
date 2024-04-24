
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

function AvailabilityTable() {

  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to Cars and Services page with search parameters
    navigate(`/cars_and_services`);
  };
 
return (
    <Container style={{ backgroundColor: "#03C03C", width: '80%', display: "flex", justifyContent: "center", alignItems: 'center', minHeight: '30vh' }}>
      <Form style={{ display: 'block', padding: '20px', width: '80%' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', gap: "40px", marginBottom: '20px' }}>
          <Form.Control style={{ width: '50%' }} list="locations" placeholder="Pickup Location"  />
          <Form.Control style={{ width: '50%' }} type="date" aria-label="Date" placeholder='Pickup Date'  />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", gap: '40px' }}>
          <Form.Control style={{ width: '50%' }} type="text" placeholder="Dropoff Location" />
          <Form.Control style={{ width: '50%' }} type="date" aria-label="Date" placeholder='Pickup Date'  />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <Button variant="primary" type="submit">
            Find My Car
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AvailabilityTable;
