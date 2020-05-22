import React, { useEffect } from "react";

import { changePageAction } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const FormBreadcrumbs = (props) => {
  const page = useSelector((state) => state.sessions.page);
  const dispatch = useDispatch();

  const changePage = (change) => {
    dispatch(changePageAction(change));
  };

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__titles">
        <h3 className={`step-title ${page >= 1 ? "is-active" : ""}`}>
          Size & duration
        </h3>
        <h3 className={`step-title ${page >= 2 ? "is-active" : ""}`}>
          Where to clean
        </h3>
        <h3
          className={`step-title ${page >= 3 || page >= 4 ? "is-active" : ""}`}
        >
          When to clean
        </h3>
        <h3 className={`step-title ${page >= 5 ? "is-active" : ""}`}>
          Summary
        </h3>
      </div>
      <div className="breadcrumbs__steps">
        <div className={`circle ${page >= 1 ? "is-active" : ""}`}>
          <p className="step">1</p>
        </div>
        <div className="vertical-line">
          <div className={`inner ${page >= 2 ? "is-active" : ""}`}></div>
        </div>
        <div className={`circle ${page >= 2 ? "is-active" : ""}`}>
          <p className="step">2</p>
        </div>
        <div className="vertical-line">
          <div className={`inner ${page >= 3 ? "is-active" : ""}`}></div>
        </div>

        <div className={`circle ${page >= 3 || page >= 4 ? "is-active" : ""}`}>
          <p className="step">3</p>
        </div>
        <div className="vertical-line">
          <div className={`inner ${page >= 5 ? "is-active" : ""}`}></div>
        </div>

        <div className={`circle ${page >= 5 ? "is-active" : ""}`}>
          <p className="step">4</p>
        </div>
      </div>
    </div>
  );
};

export default FormBreadcrumbs;

// {page === 1 && <WizardFormFirstPage onSubmit={() => changePage(1)} />}
// {page === 2 && (
//   <WizardFormSecondPage
//     previousPage={changePage}
//     onSubmit={() => changePage(1)}
//   />
// )}
// {page === 3 && (
//   <WizardFormThirdPage
//     previousPage={changePage}
//     onSubmit={() => changePage(1)}
//     date={date}
//   />
// )}
// {page === 4 && (
//   <WizardFormFourthPage
//     previousPage={changePage}
//     onSubmit={() => changePage(1)}
//     date={date}
//   />
// )}
// {page === 5 && (
//   <WizardFormFifthPage
//     previousPage={changePage}
//     onSubmit={onFormSubmission}
//   />
// )}
