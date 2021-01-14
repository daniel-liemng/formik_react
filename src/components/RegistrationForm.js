import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

const RegistrationForm = () => {
  const modeOptions = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required !!"),
    password: Yup.string().required("Required !!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password Not Match")
      .required("Required !!"),
    modeOfContact: Yup.string().required("Required !!"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required !!!!"),
    }),
  });

  const onSubmit = (values) => {
    console.log("submit", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
          />

          <FormikControl
            control='input'
            type='password'
            label='Password'
            name='password'
          />

          <FormikControl
            control='input'
            type='password'
            label='Confirm Password'
            name='confirmPassword'
          />

          <FormikControl
            control='radio'
            label='Mode Of Contact'
            name='modeOfContact'
            options={modeOptions}
          />

          <FormikControl
            control='input'
            type='text'
            label='Telephone Number'
            name='phone'
          />

          <button type='submit' disabled={!formik.isValid}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
