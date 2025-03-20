export const userFormValidation = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Enter a valid email address",
      },
    },
    birthdate: { required: "Birthdate is required" },
  };
  