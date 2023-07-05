import { useState } from "react";
const isEmail = require('validator/lib/isEmail');

export default function useForm() {
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    if (name === "email") {
      if (!isEmail(value)) {
        setError({ ...error, [name]: "Укажите email в формате name@domain.zone"});
      } else (setError({ ...error, [name]: e.target.validationMessage}))
    } else {
      setError({ ...error, [name]: e.target.validationMessage});
    }
    setIsValid(e.target.closest('form').checkValidity());
  };

  function resetValidation(formValue={}, error = {}) {
    setFormValue(formValue);
    setError(error);
  }

  function setData(nameValue, emailValue) {
    setFormValue({name: nameValue, email: emailValue });
  }

  function setInput(input) {
    setFormValue({movie: input});
  }

  return {formValue, error, handleChange, resetValidation, isValid, setData, setInput};
}