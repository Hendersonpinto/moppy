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

class LogForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return { valid: false, invalid: true };
    }
    if (touched) {
      return { valid: true, invalid: false };
    }
    return { valid: null, invalid: null };
  };

  renderInput = (formProps) => {
    return (
      <FormGroup check={formProps.check ? true : null}>
        <Label check={formProps.check ? true : null}>{formProps.label}</Label>
        <Input
          type={formProps.type}
          id={formProps.input.name}
          placeholder={formProps.placeholder}
          {...formProps.input}
          autoComplete="off"
          valid={this.renderError(formProps.meta).valid}
          invalid={this.renderError(formProps.meta).invalid}
        />
        <FormFeedback>{formProps.meta.error}</FormFeedback>
      </FormGroup>
    );
  };
  renderInputCheck = (formProps) => {
    return (
      <FormGroup check={formProps.check ? true : null}>
        <Label check={formProps.check ? true : null}>
          {formProps.label}
          <Input type={formProps.type} />
        </Label>
      </FormGroup>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    console.log("ESTA MIERDA CORRIO");
    console.log(this.props);
    return (
      <>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <FormGroup>
            <Field
              name="email"
              component={this.renderInput}
              label="Email"
              type="email"
              placeholder="Insert your email"
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="password"
              component={this.renderInput}
              label="Password"
              type="password"
              placeholder="Insert your password"
            />
          </FormGroup>
          <p>Forgot email or password ?</p>
          <Field
            name="remember"
            component={this.renderInputCheck}
            label="Remember this device"
            type="checkbox"
            check={true}
          />
          <Button className="mybutton salmon-button">
            <div className="google">
              <img src={this.props.buttonImage} className="lock"></img>
              <p>Sign In</p>
            </div>
          </Button>
        </form>
        {this.props.myerror ? (
          <p>{`Something went wrong: ${this.props.myerror}`}</p>
        ) : (
          ""
        )}
      </>
    );
  }
}

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
