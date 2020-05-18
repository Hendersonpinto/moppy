import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import { Button } from "reactstrap";
import renderSelectField from "./renderSelectField";

const duration = [2, 3, 4, 5, 6, 7, 8];
const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="wizard-form">
      <h3 className="wizard-form__title">
        Let us know more about your cleaning needs
      </h3>
      <form onSubmit={handleSubmit}>
        <Field
          name="size"
          type="text"
          component={renderField}
          label="Size of your home"
          placeholder="Size in sqm"
        />
        <Field
          name="rooms"
          component={renderSelectField}
          firstOption=""
          optionsToChoose={rooms}
          label="Rooms"
          unit="rooms"
        />
        <Field
          name="duration"
          component={renderSelectField}
          firstOption=""
          optionsToChoose={duration}
          label="Duration of cleaning"
          unit="hours"
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
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
