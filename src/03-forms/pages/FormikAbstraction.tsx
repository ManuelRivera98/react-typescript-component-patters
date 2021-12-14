import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CheckBoxInput, SelectInput, TextInput } from '../components';

import '../styles/styles.css'


export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 o menos carácteres')
            .required('Obligatorio'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 o menos carácteres')
            .required('Obligatorio'),
          email: Yup.string()
            .email('No es un email válido')
            .required('Obligatorio'),
          jobType: Yup.string()
            .notOneOf(['it-senior'], 'No puedes ser IT Senior')
            .required('Obligatorio'),
          terms: Yup.boolean()
            .oneOf([true], 'Tienes que aceptar los terminos y condiciones'),
        })}
      >
        {() => (
          <Form>

            <TextInput type='text' id='="firstName' name='firstName' label='First Name' />
            <TextInput type='text' id='="lastName' name='lastName' label='Last Name' />
            <TextInput type='email' id='="email' name='email' label='Email' />

            <SelectInput id='jobType' name="jobType" as="select" label="Job Type ">

              <option value="">Select One Job</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="po">PO</option>
              <option value="it-senior">IT Senior</option>

            </SelectInput>

            <CheckBoxInput name='terms' label='Terms & Conditions' id='terms' />

            <button type="submit">Submit</button>

          </Form>
        )}


      </Formik>


    </div>
  )
}