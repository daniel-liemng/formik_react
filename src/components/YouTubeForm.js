import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import TextError from "./TextError";

// state
const initialValues = {
  name: "Jane",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    youtube: "",
  },
  phone: ["", ""],
  phoneNbr: [""],
};

// submit
const onSubmit = (values) => {
  console.log("submit", values);
};

// validate
const validationSchema = Yup.object({
  name: Yup.string().required("Name Required!"),
  email: Yup.string().email("Invalid email").required("Email Required!"),
  channel: Yup.string().required("Channel Required!"),
  comments: Yup.string().required("Comments Required!"),
  address: Yup.string().required("Address Required!"),
});

export const YouTubeForm = () => {
  //// USE FORMIK COMPONENT INSTEAD
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

  // console.log("data", formik.values);
  // console.log("errors", formik.errors);
  // console.log("visitedField", formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type='text' placeholder='Enter name' name='name' />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div>
          <label>Email</label>
          <Field type='email' placeholder='Enter email' name='email' />
          <ErrorMessage name='email' component={TextError} />
        </div>

        <div>
          <label>Channel</label>
          <Field type='text' placeholder='Enter channel' name='channel' />
          <ErrorMessage name='channel' />
        </div>

        <div>
          <label>Comments</label>
          <Field
            component='textarea'
            placeholder='Enter comments'
            name='comments'
          />
          <ErrorMessage name='comments' />
        </div>

        <div>
          <label>Address</label>
          <Field name='address'>
            {(props) => {
              const { field, form, meta } = props;
              //console.log("Render props:", props);
              return (
                <div>
                  <input type='text' {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name='comments' />
        </div>

        <div>
          <label>Youtube</label>
          <Field type='text' name='social.youtube' />
        </div>

        <div>
          <label>Facebook</label>
          <Field type='text' name='social.facebook' />
        </div>

        <div>
          <label>Phone 1</label>
          <Field type='text' name='phone[0]' />
        </div>

        <div>
          <label>Phone 2</label>
          <Field type='text' name='phone[1]' />
        </div>

        <div>
          <label>Phone - FieldArray</label>
          <FieldArray type='text' name='phoneNbr'>
            {(fieldArrayProps) => {
              const {
                push,
                remove,
                form: {
                  values: { phoneNbr },
                },
              } = fieldArrayProps;
              //console.log("Render field array props:", fieldArrayProps);
              return (
                <div>
                  {phoneNbr.map((nbr, index) => (
                    <div key={index}>
                      <Field name={`phoneNbr[${index}]`} />
                      {index > 0 && (
                        <button type='button' onClick={() => remove(index)}>
                          -
                        </button>
                      )}
                      <button type='button' onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <Button type='submit'>Submit</Button>
      </Form>
    </Formik>
  );
};

export default YouTubeForm;
