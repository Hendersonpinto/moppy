import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const MyModal = ({
  display,
  toggleModal,
  cleaningId,
  onDelete,
  modalTitle,
  modalBody,
}) => {
  const closeBtn = (
    <button className="close" onClick={toggleModal}>
      &times;
    </button>
  );
  // It takes two arguments, the first is a JSX blob if what we want to render
  return ReactDOM.createPortal(
    <div>
      <Modal isOpen={display} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal} close={closeBtn}>
          {modalTitle}
        </ModalHeader>
        <ModalBody>{modalBody}</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              onDelete(cleaningId);
            }}
          >
            Delete cleaning
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>,
    document.getElementById("root")
  );
};

export default MyModal;

// import React, { useState } from 'react';

// const ModalExample = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

//   return (
//   <div>
//     <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
//     <Modal isOpen={modal} toggle={toggle} className={className}>
//       <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
//       <ModalBody>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
//         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
//         ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
//         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//         mollit anim id est laborum.
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
//         <Button color="secondary" onClick={toggle}>Cancel</Button>
//       </ModalFooter>
//     </Modal>
//   </div>
// );
// }

// export default ModalExample;
