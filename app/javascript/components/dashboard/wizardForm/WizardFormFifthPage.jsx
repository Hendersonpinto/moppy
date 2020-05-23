import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import validate from "./validate";

const WizardFormFifthPage = (props) => {
  const date = useSelector((state) => state.sessions.date);
  const values = useSelector((state) => state.form.wizard.values);
  const { handleSubmit, previousPage, pristine, submitting } = props;

  return (
    <div className="wizard-form">
      <h3 className="wizard-form__title">Almost there...</h3>
      <div className="wrapper">
        <h4>Order summary</h4>
        <hr style={{ width: "100%" }} />
        <div className="fields">
          <div className="order-field">
            <p>City:</p>
            <p>{`${values.city}`}</p>
          </div>
          <div className="order-field">
            <p>Street:</p>
            <p>{`${values.street}`}</p>
          </div>
          <div className="order-field">
            <p>House number:</p>
            <p>{`${values.houseNumber}`}</p>
          </div>
          <div className="order-field">
            <p>Date:</p>
            <p>{`${date.toLocaleDateString()} at ${date.getHours()}`}</p>
          </div>
          <div className="order-field">
            <p>Duration:</p>
            <p>{`${values.duration} hours`}</p>
          </div>
        </div>
        <hr style={{ width: "100%" }} />
      </div>
      <div className="wizard-content">
        <form onSubmit={handleSubmit}>
          {/* <div>
            <label htmlFor="employed">Employed</label>
            <div>
              <Field name="employed" id="employed" type="checkbox" />
            </div>
          </div> */}
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
              disabled={pristine || submitting}
              className="mybutton overblik-button wizard"
              color="info"
              size="lg"
            >
              Request cleaning
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFifthPage);
