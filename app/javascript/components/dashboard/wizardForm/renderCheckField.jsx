import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  Col,
} from "reactstrap";

const renderError = (error, touched) => {
  if (touched && error) {
    return { valid: false, invalid: true };
  }
  if (touched) {
    return { valid: true, invalid: false };
  }
  return { valid: null, invalid: null };
};

const renderCheckField = ({ input, meta: { touched, error }, label, name }) => (
  <FormGroup check>
    <Label check>
      <Input
        type="checkbox"
        name={name}
        valid={renderError(error, touched).valid}
        invalid={renderError(error, touched).invalid}
        {...input}
      />{" "}
      <p>{label}</p>
    </Label>
    <FormFeedback>{error}</FormFeedback>
  </FormGroup>
);

export default renderCheckField;
