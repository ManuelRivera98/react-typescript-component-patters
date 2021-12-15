import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { SelectInput, TextInput } from '../components';

import formJson from '../data/custom-form.json';

const initialState: {
  [key: string]: any,
} = {}

const requiredFields: {
  [key: string]: any,
} = {}


for (const input of formJson) {
  initialState[input.name] = input.value;

  if (!input.validations) continue;

  let schema = yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(rule.message)
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, rule.message);
    }

    if (rule.type === 'email') {
      schema = schema.email(rule.message);
    }

    // add another rules
  }

  requiredFields[input.name] = schema;
};


const validationSchema = yup.object({
  ...requiredFields
})

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>

            {formJson.map(({ label, name, type, id, options }) => {

              switch (type) {
                case 'email':
                case 'text':
                case 'password':
                  return (
                    <TextInput
                      id={id}
                      key={id}
                      label={label}
                      name={name}
                      type={type as any}
                    />
                  )
                case 'select':
                  return (
                    <SelectInput
                      id={id}
                      label={label}
                      name={name}
                      key={id}
                    >
                      <option value="">Select a movie</option>

                      {options?.map((option) => (
                        <option key={option.id} value={option.id}>{option.label}</option>
                      ))}
                    </SelectInput>
                  )
                default:
                  return (<span>{type} No válido</span>)
              }

            })}

            <button
              type="submit"
            >Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
