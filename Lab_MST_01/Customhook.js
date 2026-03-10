import { useState } from "react";

function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // reset form
  const resetForm = () => {
    setFormData(initialValues);
  };

  return { formData, handleChange, resetForm };
}

export default useForm;
