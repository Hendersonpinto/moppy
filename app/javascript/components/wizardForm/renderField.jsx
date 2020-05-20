import React from "react";
import { Col, FormGroup, Label, Input, FormFeedback } from "reactstrap";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return { valid: false, invalid: true };
  }
  if (touched) {
    return { valid: true, invalid: false };
  }
  return { valid: null, invalid: null };
};

const renderField = (formProps) => {
  // These formProps are coming from the <Field> component of Redux Form
  // It basically gets a bunch of props to run validation, make the field
  // controlled and much more.
  console.log(formProps);
  return (
    <Col md={formProps.width}>
      <FormGroup check={formProps.check ? true : null}>
        <Label check={formProps.check ? true : null}>{formProps.label}</Label>
        <Input
          type={formProps.type}
          id={formProps.input.name}
          placeholder={formProps.placeholder}
          {...formProps.input}
          autoComplete="off"
          valid={renderError(formProps.meta).valid}
          invalid={renderError(formProps.meta).invalid}
        />
        <FormFeedback>{formProps.meta.error}</FormFeedback>
      </FormGroup>
    </Col>
  );
};
export default renderField;
