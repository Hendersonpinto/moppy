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

const renderSelectField = ({
  input,
  meta: { touched, error },
  firstOption,
  optionsToChoose,
  label,
  name,
  unit,
  width,
}) => (
  <Col md={width}>
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        type="select"
        name={name}
        id={name}
        {...input}
        autoComplete="off"
        valid={renderError(error, touched).valid}
        invalid={renderError(error, touched).invalid}
      >
        <option value="">{firstOption}</option>
        {optionsToChoose.map((val) => (
          <option value={val} key={val}>
            {`${val} ${unit}`}
          </option>
        ))}
      </Input>
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  </Col>
);

export default renderSelectField;
