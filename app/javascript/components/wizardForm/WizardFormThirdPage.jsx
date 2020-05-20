import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "reactstrap";

import validate from "./validate";
import renderField from "./renderField";
import renderSelectField from "./renderSelectField";
import Calendar from "../bit/calendar/components/Calendar/index";
import { useSelector, useDispatch } from "react-redux";
import { pickDate } from "../../actions";

const WizardFormThirdPage = (props) => {
  const date = useSelector((state) => state.sessions.date);
  const dispatch = useDispatch();
  const { handleSubmit, previousPage, pristine, submitting } = props;

  const renderCalendar = ({
    input,
    defaultValue,
    meta: { touched, error },
  }) => {
    let now = new Date();
    return (
      <div className="calendar">
        <Calendar
          {...input}
          value={date}
          onChange={(newDate) => {
            console.log(newDate);
            const dateformated = new Intl.DateTimeFormat("en-US", {
              month: "long",
            }).format(newDate);
            const dateformated2 = newDate.toLocaleDateString();
            console.log(dateformated);
            console.log(dateformated2);

            dispatch(pickDate(newDate));
          }}
          minDate={
            new Date().getHours() >= 18
              ? new Date(now.setDate(now.getDate() + 1))
              : new Date()
          }
        />
        {touched && error && <span>{error}</span>}
      </div>
    );
  };

  return (
    <div className="wizard-form">
      <h3 className="wizard-form__title">When does it fits you ?</h3>
      <Field name="cleaningDate" type="text" component={renderCalendar} />
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
})(WizardFormThirdPage);
