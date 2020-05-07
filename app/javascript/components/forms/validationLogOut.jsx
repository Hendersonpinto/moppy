const validate = (formValues) => {
  // object declared to store errors
  const min_digits = 6;
  const errors = {};
  // Only run if user did not enter a title
  if (!formValues.first_name) {
    errors.first_name = "You must enter a name";
  }
  // Only run if user did not enter a description
  if (!formValues.last_name) {
    errors.last_name = "You must enter a last name";
  }
  if (!formValues.email) {
    errors.email = "You must enter an email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  if (formValues.password && formValues.password.length < min_digits) {
    errors.password = `Your password must contain at least ${min_digits} digits`;
  }
  if (!formValues.password_confirmation) {
    errors.password_confirmation = "You must repeat your password";
  }
  if (
    formValues.password_confirmation &&
    formValues.password_confirmation !== formValues.password
  ) {
    errors.password_confirmation = "Your password must be identical";
  }
  return errors;
};

export default validate;
