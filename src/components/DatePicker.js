import React from "react";

import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;