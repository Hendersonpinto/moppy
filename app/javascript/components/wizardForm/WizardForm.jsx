import React, { Component } from "react";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";
import WizardFormFourthPage from "./WizardFormFourthPage";

import { changePageAction, createCleaning } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const WizardForm = (props) => {
  const page = useSelector((state) => state.sessions.page);
  const dispatch = useDispatch();

  const changePage = (change) => {
    console.log("I ran");
    dispatch(changePageAction(change));
  };
  const onFormSubmission = (values) => {
    console.log("finished submitting form");
    console.log(values);
  };

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
        />
      )}
      {page === 4 && (
        <WizardFormFourthPage
          previousPage={changePage}
          onSubmit={onFormSubmission}
        />
      )}
    </div>
  );
};

export default WizardForm;
