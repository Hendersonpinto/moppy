import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "reactstrap";

import validate from "./validate";
import renderField from "./renderField";
import renderSelectField from "./renderSelectField";

const WizardFormThirdPage = (props) => {
  const { handleSubmit, previousPage, pristine, submitting } = props;

  console.log(pristine);
  console.log(submitting);
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
      <h3 className="wizard-form__title">When does it fits you ?</h3>
      <form onSubmit={handleSubmit}>
        <Field
          name="date"
          type="text"
          component={renderField}
          label="Date"
          placeholder="25/05"
        />
        <Field
          name="time"
          type="text"
          component={renderField}
          label="Time"
          placeholder="11:30"
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
})(WizardFormThirdPage);
