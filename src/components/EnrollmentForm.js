import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

const EnrollmentForm = () => {
  const courseOptions = [
    { key: "Select your course", value: "" },
    { key: "Math", value: "mathOption" },
    { key: "Physic", value: "physicOption" },
    { key: "Chemistry", value: "chemistryOption" },
  ];

  const skillOptions = [
    { key: "HTML", value: "htmlOption" },
    { key: "CSS", value: "cssOption" },
    { key: "Javascript", value: "jsOption" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skillset: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required !!").email("Invalid email format"),
    bio: Yup.string().required("Required !!"),
    course: Yup.string().required("Required !!"),
    // skillset: Yup.array().required("Required !!"),
    courseDate: Yup.date().required("Required !!").nullable(),
  });

  const onSubmit = (values) => {
    // console.log("submit", values);
    console.log("submit", JSON.parse(JSON.stringify(values)));
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

          <FormikControl control='textarea' label='Bio' name='bio' />

          <FormikControl
            control='select'
            label='Course'
            name='course'
            options={courseOptions}
          />

          <FormikControl
            control='checkbox'
            label='Skillset'
            name='skillset'
            options={skillOptions}
          />

          <FormikControl control='date' label='Course Date' name='courseDate' />

          <button type='submit' disabled={!formik.isValid}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EnrollmentForm;
