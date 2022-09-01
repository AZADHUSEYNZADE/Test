import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const schema = yup.object().shape({
  integer: yup.number().min(1).max(99).required(),
});

const Squares = () => {
  const [arr, setArr] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    const num = Number(data.integer);
    setArr(new Array(num).fill(0));
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputGroup className="mb-3 w-50">
          <Form.Control
            type="number"
            {...register("integer")}
            className="w-100"
          />

          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="submit"
            className="bg-primary text-light"
          >
            Button
          </Button>
        </InputGroup>
      </form>
      <p className="errorMessage"> {errors.integer?.message} </p>

      <Container className=" gap-5">
        <Row>
          {arr?.map((item, i) => {
            return (
              <Col
                key={i}
                className="box bg-primary  border-light main-col gap-5"
                xs={1}
              >
                <h3 className="text-light text-center">{i + 1}</h3>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Squares;
