import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

const Squares = () => {
  const [arr, setArr] = useState();
  const { register } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    const num = Number(e.target[0].value);
    setArr(Array.from({ length: num }).fill(0));
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            placeholder="Enter email"
            {...register("numbers", { required: true })}
            min={0}
            max={100}
          />
        </Form.Group>

        <Button type="submit " variant="primary" size="xs">
          Submit
        </Button>
      </form>
      <Container>
        <Row>
          {arr?.map((item) => {
            return (
              <Col className="box bg-primary" xs={1}>
                item
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Squares;
