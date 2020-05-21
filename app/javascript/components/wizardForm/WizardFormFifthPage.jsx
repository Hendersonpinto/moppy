import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import validate from "./validate";
import renderField from "./renderField";
import renderSelectField from "./renderSelectField";

const WizardFormFourthPage = (props) => {
  const date = useSelector((state) => state.sessions.date);
  const timeslot = useSelector((state) => state.sessions.timeslot);
  const values = useSelector((state) => state.form.wizard.values);
  console.log(props);
  const { handleSubmit, previousPage, pristine, submitting } = props;

  console.log(pristine);
  console.log(submitting);
  return (
    <div className="wizard-form">
      <h3 className="wizard-form__title">Cleaning summary</h3>
      <div className="wrapper">
        <p>{`Address: ${values.street} ${values.houseNumber}, ${values.city}`}</p>
        <p>{`Datetime: ${date} at ${timeslot}`}</p>
        <p>{`Duration: ${values.duration} hours`}</p>
      </div>
      <div className="wizard-content">
        <form onSubmit={handleSubmit}>
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
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFourthPage);
