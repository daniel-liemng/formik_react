import React from "react";
import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          //console.log("field props", field);
          return options.map((option) => (
            <div key={option.key}>
              <input
                type='radio'
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </div>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
