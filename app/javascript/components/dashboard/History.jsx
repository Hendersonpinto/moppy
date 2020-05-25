import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../Modal";
import { fetchSessions, cleanSessions, deleteCleaning } from "../../actions";
import ExpiredCleaningCard from "./sessions/ExpiredCleaningCard";
import CompletedCleaningCard from "./sessions/CompletedCleaningCard";

import HistoryBackground from "../../../assets/images/historyBackground.svg";

const History = () => {
  const completed = useSelector((state) =>
    state.sessions ? Object.values(state.sessions.completed) : null
  );
  const expired = useSelector((state) =>
    state.sessions ? Object.values(state.sessions.expired) : null
  );

  const renderCompletedCleanings = () => {
    if (Array.isArray(completed) && completed.length) {
      return completed
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .map((session) => {
          return <CompletedCleaningCard key={session.id} session={session} />;
        });
    }
    return <p>You do not have any session yet</p>;
  };

  const renderExpiredCleanings = () => {
    if (Array.isArray(expired) && expired.length) {
      return expired
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .map((pending) => {
          return <ExpiredCleaningCard key={pending.id} session={pending} />;
        });
    }
    return <p>You do not have any session yet</p>;
  };

  if (
    (Array.isArray(completed) && completed.length) ||
    (Array.isArray(expired) && expired.length)
  ) {
    return (
      <>
        <div className="cleanings">
          <h3 className="content__title">Completed cleanings:</h3>
          <div className="scrollable">
            <div className="cleanings-list">{renderCompletedCleanings()}</div>
          </div>
        </div>
        <div className="cleanings">
          <h3 className="content__title">Expired cleanings:</h3>
          <div className="scrollable">
            <div className="cleanings-list">{renderExpiredCleanings()}</div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="welcome-message">
        <img src={HistoryBackground} alt="history" />

        <h1>You don't have previous cleanings</h1>
      </div>
    </>
  );
};

export default History;
