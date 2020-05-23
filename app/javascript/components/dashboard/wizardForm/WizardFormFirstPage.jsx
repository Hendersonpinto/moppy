import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import { Button, Row } from "reactstrap";
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
      <div className="wizard-content">
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <Row form>
              <Field
                name="size"
                type="text"
                component={renderField}
                label="Size of your home"
                placeholder="Size in sqm"
                width={6}
              />
              <Field
                name="rooms"
                component={renderSelectField}
                firstOption="Choose rooms"
                optionsToChoose={rooms}
                label="Rooms"
                unit="rooms"
                width={6}
              />
            </Row>
            <Field
              name="duration"
              component={renderSelectField}
              firstOption="Choose duration"
              optionsToChoose={duration}
              label="Duration of cleaning"
              unit="hours"
              width={14}
            />
          </div>

          <div className="buttons-form">
            <Button
              type="submit"
              className="mybutton overblik-button wizard"
              color="info"
              block
              size="lg"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
