import { useState } from "react";

export default function useForm() {
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setError({ ...error, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  function resetValidation(formValue={}, error = {}) {
    setFormValue(formValue);
    setError(error);
  }

  return {formValue, error, handleChange, resetValidation, isValid};
}