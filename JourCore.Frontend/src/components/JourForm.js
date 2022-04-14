import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const JourForm = (props) => {
  console.log(props);
  const [jour, setJour] = useState({
    name: props.jour ? props.jour.name : "",
    city: props.jour ? props.jour.city : "",
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { name, city } = jour;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, city];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        name,
        city,
        date: new Date(),
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Fyll i alla obligatoriska fält.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setJour((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Jour</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Jourens namn"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>Stad</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="city"
            value={city}
            placeholder="Jourens stad"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default JourForm;
