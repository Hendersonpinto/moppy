const validate = (values) => {
  const errors = {};
  if (!values.size) {
    errors.size = "Required";
  } else if (!/^[0-9]+$/.test(values.size)) {
    errors.size = "Only numeric values";
  }
  if (!values.rooms) {
    errors.rooms = "Required";
  } else if (!/^[0-9]+$/.test(values.rooms)) {
    errors.rooms = "Only numeric values";
  }
  if (!values.duration) {
    errors.duration = "Required";
  } else if (!/^[0-9]+$/.test(values.duration)) {
    errors.duration = "Only numeric values";
  }

  if (!values.city) {
    errors.city = "Required";
  } else if (
    !/^([a-zA-Z\u0080-\u024F]+(?:(\. )|-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(
      values.city
    )
  ) {
    errors.city = "Invalid city name";
  }
  if (!values.street) {
    errors.street = "Required";
  }
  if (!values.houseNumber) {
    errors.houseNumber = "Required";
  }
  if (!values.postCode) {
    errors.postCode = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export default validate;
