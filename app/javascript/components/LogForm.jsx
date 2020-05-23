import React from "react";
import { Field, reduxForm } from "redux-form";
import MoppyButton from "./MoppyButton";

import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

const renderFields = (fields) => {
  return fields.map(({ name, label, type, placeholder, ...restFields }) => {
    return (
      <Field
        key={name}
        name={name}
        component={renderInput}
        label={label}
        type={type}
        placeholder={placeholder}
        {...restFields}
      />
    );
  });
};
const renderInput = (formProps) => {
  // These formProps are coming from the <Field> component of Redux Form
  // It basically gets a bunch of props to run validation, make the field
  // controlled and much more.
  return (
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
  );
};
const renderError = ({ error, touched }) => {
  if (touched && error) {
    return { valid: false, invalid: true };
  }
  if (touched) {
    return { valid: true, invalid: false };
  }
  return { valid: null, invalid: null };
};

const LogForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
  console.log(props);
  return (
    <>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        {renderFields(props.fields)}
        <p>Forgot email or password ?</p>

        <MoppyButton className="salmon-button bordered" type="submit">
          <div className="google">
            <img src={props.buttonImage} className="lock"></img>
            <p>Log In</p>
          </div>
        </MoppyButton>
      </form>
      {props.myerror ? <p>{`Something went wrong: ${props.myerror}`}</p> : ""}
    </>
  );
};

// formValues is passed as props with the values from the fields
// when validate is called, with the Key specified on our Field ReactComponent

const validate = (formValues) => {
  // object declared to store errors
  const min_digits = 6;
  const errors = {};
  // Only run if user did not enter a title
  if (!formValues.email) {
    errors.email = "You must enter an email";
  }
  if (
    formValues.email &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formValues.email)
  ) {
    errors.email = "You have entered an invalid email address";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  if (formValues.password && formValues.password.length < min_digits) {
    errors.password = `Your password must contain at least ${min_digits} digits`;
  }
  return errors;
};

export default reduxForm({
  form: "LogForm",
  validate,
})(LogForm);
