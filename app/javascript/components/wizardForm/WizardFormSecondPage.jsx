import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "reactstrap";

import validate from "./validate";
import renderField from "./renderField";
import renderSelectField from "./renderSelectField";

const WizardFormSecondPage = (props) => {
  const { previousPage, handleSubmit } = props;
  return (
    <div className="wizard-form">
      <Button
        type="button"
        className="mybutton overblik-button"
        onClick={() => {
          previousPage(-1);
        }}
      >
        Previous
      </Button>
      <h3 className="wizard-form__title">Where is your home located ?</h3>
      <form onSubmit={handleSubmit}>
        <Field
          name="city"
          type="text"
          component={renderField}
          label="City"
          placeholder="Trondheim"
        />
        <Field
          name="street"
          type="text"
          component={renderField}
          label="Street"
          placeholder="Nedre Bakklandet"
        />
        <Field
          name="houseNumber"
          type="text"
          component={renderField}
          label="House Number"
          placeholder="A61"
        />
        <Field
          name="postCode"
          type="text"
          component={renderField}
          label="Post code"
          placeholder="7014"
        />

        <div>
          <Button type="submit" className="mybutton overblik-button">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
