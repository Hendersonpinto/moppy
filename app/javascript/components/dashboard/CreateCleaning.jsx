import React from "react";
import { Link } from "react-router-dom";
import WizardForm from "../wizardForm/WizardForm";
import FormBreadcrumbs from "./FormBreadcrumbs";
const CreateCleaning = () => {
  return (
    <div className="form-wrapper">
      <FormBreadcrumbs />
      <WizardForm />
    </div>
  );
};

export default CreateCleaning;
