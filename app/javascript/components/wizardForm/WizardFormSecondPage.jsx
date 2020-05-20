import React from "react";
import { Field, reduxForm } from "redux-form";
import { Row, Button } from "reactstrap";

import validate from "./validate";
import renderField from "./renderField";
import renderSelectField from "./renderSelectField";

const WizardFormSecondPage = (props) => {
  const { previousPage, handleSubmit } = props;
  return (
    <div className="wizard-form">
      <h3 className="wizard-form__title">Where is your home located ?</h3>
      <div className="wizard-content">
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <Field
              name="city"
              type="text"
              component={renderField}
              label="City"
              placeholder="Trondheim"
              width={14}
            />
            <Field
              name="street"
              type="text"
              component={renderField}
              label="Street"
              placeholder="Nedre Bakklandet"
              width={14}
            />
            <Row form>
              <Field
                name="houseNumber"
                type="text"
                component={renderField}
                label="House Number"
                placeholder="A61"
                width={6}
              />
              <Field
                name="postCode"
                type="text"
                component={renderField}
                label="Post code"
                placeholder="7014"
                width={6}
              />
            </Row>
          </div>

          <div className="buttons-form">
            <Button
              type="button"
              className="mybutton overblik-button wizard previous"
              color="info"
              onClick={() => {
                previousPage(-1);
              }}
              size="lg"
            >
              Previous
            </Button>
            <Button
              type="submit"
              className="mybutton overblik-button"
              className="mybutton overblik-button wizard"
              color="info"
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
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
