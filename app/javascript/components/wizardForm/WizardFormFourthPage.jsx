import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "reactstrap";

import validate from "./validate";
import renderField from "./renderField";
import renderSelectField from "./renderSelectField";
import Timetable from "./Timetable";
import Calendar from "../bit/calendar/components/Calendar/index";
import { useSelector, useDispatch } from "react-redux";
import { pickDate } from "../../actions";

const WizardFormFourthPage = (props) => {
  const date = useSelector((state) => state.sessions.date);
  const dispatch = useDispatch();
  const { handleSubmit, previousPage, pristine, submitting } = props;

  const renderTimetable = ({
    input,
    defaultValue,
    meta: { touched, error },
  }) => (
    <>
      <Timetable date={date} />
      {touched && error && <span>{error}</span>}
    </>
  );

  return (
    <div className="wizard-form">
      <h3 className="wizard-form__title">When does it fits you ?</h3>
      <div className="wrapper">
        <p>{date.toDateString()}</p>
        <hr style={{ width: "100%" }} />
        <Field name="cleaningTime" type="text" component={renderTimetable} />
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
})(WizardFormFourthPage);
