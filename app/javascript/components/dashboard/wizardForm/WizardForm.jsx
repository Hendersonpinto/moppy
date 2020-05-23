import React, { useEffect } from "react";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";
import WizardFormFourthPage from "./WizardFormFourthPage";
import WizardFormFifthPage from "./WizardFormFifthPage";

import { changePageAction, createCleaning, cleanForm } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";

const WizardForm = (props) => {
  const page = useSelector((state) => state.sessions.page);
  const date = useSelector((state) => state.sessions.date);
  const dispatch = useDispatch();

  const changePage = (change) => {
    dispatch(changePageAction(change));
  };
  const onFormSubmission = (values) => {
    const session = { ...values, date };
    console.log("finished submitting form");
    console.log(values);
    console.log(date);
    console.log(session);
    dispatch(createCleaning(session));
  };
  useEffect(() => {
    return () => {
      dispatch(cleanForm());
    };
  }, []);
  console.log(date);
  return (
    <div>
      {page === 1 && <WizardFormFirstPage onSubmit={() => changePage(1)} />}
      {page === 2 && (
        <WizardFormSecondPage
          previousPage={changePage}
          onSubmit={() => changePage(1)}
        />
      )}
      {page === 3 && (
        <WizardFormThirdPage
          previousPage={changePage}
          onSubmit={() => changePage(1)}
          date={date}
        />
      )}
      {page === 4 && (
        <WizardFormFourthPage
          previousPage={changePage}
          onSubmit={() => changePage(1)}
          date={date}
        />
      )}
      {page === 5 && (
        <WizardFormFifthPage
          previousPage={changePage}
          onSubmit={onFormSubmission}
        />
      )}
    </div>
  );
};

export default WizardForm;
