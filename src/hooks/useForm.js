import { useState } from "react";

export default function useForm() {
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    const error = e.target.validationMessage;
    setFormValue({ ...formValue, [name]: value });
    setError({ ...error, [name]: error });
  };

  function resetValidation(formValue={}, error = {}) {
    setFormValue(formValue);
    setError(error);
  }

  return {formValue, error, handleChange, resetValidation};
}