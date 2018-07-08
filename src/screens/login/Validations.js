
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

if (isEmpty(data.identifier)) {
    errors.identifier = 'This field is required';
  }

  if (isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}