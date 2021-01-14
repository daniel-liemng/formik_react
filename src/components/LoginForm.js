import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required !!").email("Invalid email format"),
    password: Yup.string().required("Required !!"),
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
            control='chakrainput'
            type='email'
            label='Email'
            name='email'
          />

          <FormikControl
            control='chakrainput'
            type='password'
            label='Password'
            name='password'
          />

          <button type='submit' disabled={!formik.isValid}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
