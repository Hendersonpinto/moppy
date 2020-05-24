import React, { useState, useEffect } from "react";
import WizardForm from "./wizardForm/WizardForm";

import history from "../../packs/history";
import ModalCreate from "../ModalCreate";
import FormBreadcrumbs from "./FormBreadcrumbs";

const CreateCleaning = () => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const toggleAndPush = () => {
    setModalDisplay(!modalDisplay);
    history.push("/hosts");
  };
  const toggleModal = () => {
    setModalDisplay(!modalDisplay);
  };

  return (
    <div className="form-wrapper">
      <FormBreadcrumbs />
      <WizardForm toggleModal={toggleModal} />
      <ModalCreate
        display={modalDisplay}
        toggleModal={toggleAndPush}
        modalTitle="Cleaning created!"
        modalBody="Congratulations! it's time to sit back and we'll find you a cleaner."
      />
    </div>
  );
};

export default CreateCleaning;
