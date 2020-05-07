import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";

import logInValidation from "./forms/validationLogIn";
import logOutValidation from "./forms/validationLogOut";

const LogForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return { valid: false, invalid: true };
    }
    if (touched) {
      return { valid: true, invalid: false };
    }
    return { valid: null, invalid: null };
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

  const renderField = (fields) => {
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

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
  console.log(props);
  return (
    <>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        {renderField(props.fields)}
        <p>Forgot email or password ?</p>

        <Button className="mybutton salmon-button">
          <div className="google">
            <img src={props.buttonImage} className="lock"></img>
            <p>{props.logType === "login" ? "Log In" : "Sign Up"}</p>
          </div>
        </Button>
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
