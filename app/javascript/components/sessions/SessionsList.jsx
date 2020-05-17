import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../Modal";
import { fetchSessions, cleanSessions, deleteCleaning } from "../../actions";
import ConfirmedSessionCard from "./ConfirmedSessionCard";
import UnconfirmedCleaningCard from "./UnconfirmedCleaningCard";

const SessionsIndex = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [cleaningIdForDelete, setCleaningIdForDelete] = useState(null);
  const currentHost = useSelector((state) => state.hosts.current_host);
  const confirmedCleanings = useSelector((state) =>
    state.sessions ? Object.values(state.sessions.confirmed) : null
  );
  const unconfirmedCleanings = useSelector((state) => {
    return state.sessions ? Object.values(state.sessions.unconfirmed) : null;
  });
  const dispatch = useDispatch();

  const deleteFromModal = (cleaningId) => {
    console.log("I RAN MDFUCKER");
    console.log(cleaningId);
    dispatch(deleteCleaning(cleaningId));
    toggle();
  };
  const toggle = () => setModalDisplay(!modalDisplay);
  const handleDelete = (cleaningId) => {
    setCleaningIdForDelete(cleaningId);
    setModalDisplay(!modalDisplay);
  };

  useEffect(() => {
    dispatch(fetchSessions(currentHost.id));
    return () => {
      dispatch(cleanSessions());
    };
  }, []);

  const renderSessions = () => {
    if (Array.isArray(confirmedCleanings) && confirmedCleanings.length) {
      return confirmedCleanings.map((session) => {
        return <ConfirmedSessionCard key={session.id} session={session} />;
      });
    }
    return <p>You do not have any session yet</p>;
  };

  const renderPendingCleanings = () => {
    if (Array.isArray(unconfirmedCleanings) && unconfirmedCleanings.length) {
      return unconfirmedCleanings.map((pending) => {
        return (
          <UnconfirmedCleaningCard
            key={pending.id}
            session={pending}
            handleDelete={handleDelete}
          />
        );
      });
    }
    return <p>You do not have any pending cleaning</p>;
  };

  console.log(modalDisplay);
  return (
    <>
      <div className="cleanings">
        <h3 className="content__title">Confirmed cleanings:</h3>
        <div className="scrollable">
          <div className="cleanings-list">{renderSessions()}</div>
        </div>
      </div>
      <div className="cleanings">
        <h3 className="content__title">Pending cleanings:</h3>
        <div className="scrollable">
          <div className="cleanings-list">{renderPendingCleanings()}</div>
        </div>
        <Modal
          display={modalDisplay}
          handleClick={toggle}
          cleaningId={cleaningIdForDelete}
          onDelete={deleteFromModal}
        />
      </div>
    </>
  );
};

export default SessionsIndex;
