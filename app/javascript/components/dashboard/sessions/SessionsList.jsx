import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ModalDelete from "../../ModalDelete";
import { fetchSessions, cleanSessions, deleteCleaning } from "../../../actions";
import ConfirmedSessionCard from "./ConfirmedSessionCard";
import UnconfirmedCleaningCard from "./UnconfirmedCleaningCard";
import Superhero from "../../../../assets/images/superheroIn.svg";

const SessionsIndex = (props) => {
  const mysessions = useSelector((state) => state.sessions.confirmed);
  const dispatch = useDispatch();
  const [modalDisplay, setModalDisplay] = useState(false);
  const [cleaningIdForDelete, setCleaningIdForDelete] = useState(null);
  const currentHost = useSelector((state) => state.hosts.current_host);
  const confirmedCleanings = useSelector((state) =>
    state.sessions.confirmed ? Object.values(state.sessions.confirmed) : null
  );
  const unconfirmedCleanings = useSelector((state) => {
    return state.sessions.unconfirmed
      ? Object.values(state.sessions.unconfirmed)
      : null;
  });

  const deleteFromModal = (cleaningId) => {
    dispatch(deleteCleaning(cleaningId));
    toggleModal();
  };
  const toggleModal = () => setModalDisplay(!modalDisplay);

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

  const renderConfirmedCleanings = () => {
    if (Array.isArray(confirmedCleanings) && confirmedCleanings.length) {
      return confirmedCleanings
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .map((session) => {
          return <ConfirmedSessionCard key={session.id} session={session} />;
        });
    }
    return <p>You do not have any session yet</p>;
  };

  const renderPendingCleanings = () => {
    if (Array.isArray(unconfirmedCleanings) && unconfirmedCleanings.length) {
      return unconfirmedCleanings
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .map((pending) => {
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

  console.log(confirmedCleanings.length);
  console.log(unconfirmedCleanings);
  if (
    (Array.isArray(unconfirmedCleanings) && unconfirmedCleanings.length) ||
    (Array.isArray(confirmedCleanings) && confirmedCleanings.length)
  ) {
    return (
      <>
        <div className="cleanings">
          <h3 className="content__title">Confirmed cleanings:</h3>
          <div className="scrollable">
            <div className="cleanings-list">{renderConfirmedCleanings()}</div>
          </div>
        </div>
        <div className="cleanings">
          <h3 className="content__title">Pending cleanings:</h3>
          <div className="scrollable">
            <div className="cleanings-list">{renderPendingCleanings()}</div>
          </div>
          <ModalDelete
            display={modalDisplay}
            toggleModal={toggleModal}
            cleaningId={cleaningIdForDelete}
            onDelete={deleteFromModal}
            modalTitle="Confirm delete"
            modalBody="Are you sure you want to delete this cleaning?"
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="welcome-message">
        <img src={Superhero} id="superhero" alt="cleaner" />

        <h1>Welcome to your dashboard.</h1>
      </div>
    </>
  );
};

export default SessionsIndex;
