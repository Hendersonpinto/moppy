import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import MoppyButton from "./MoppyButton";

import SuperheroIn from "../../assets/images/superheroIn.svg";

const ModalCreate = ({ display, toggleModal, modalTitle, modalBody }) => {
  const closeBtn = (
    <button className="close" onClick={toggleModal}>
      &times;
    </button>
  );
  // It takes two arguments, the first is a JSX blob if what we want to render
  return ReactDOM.createPortal(
    <div>
      <Modal isOpen={display} toggle={toggleModal}>
        <ModalHeader id="mymodal__header" toggle={toggleModal} close={closeBtn}>
          {modalTitle}
        </ModalHeader>
        <ModalBody id="mymodal__body">
          <img src={SuperheroIn} id="superhero" alt="cleaner" />
          <p>{modalBody}</p>
        </ModalBody>
        <ModalFooter id="mymodal__footer">
          <MoppyButton className="lg full-width" onClick={toggleModal}>
            Close
          </MoppyButton>
        </ModalFooter>
      </Modal>
    </div>,
    document.getElementById("root")
  );
};

export default ModalCreate;
