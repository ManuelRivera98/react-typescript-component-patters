import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'


export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components Tutorial</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name='email' component='span' />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">

              <option value="">Select One Job</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="po">PO</option>
              <option value="it-senior">IT Senior</option>

            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label htmlFor="terms">
              <Field id="terms" name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name='terms' component='span' />

            <button type="submit">Submit</button>

          </Form>
        )}


      </Formik>


    </div>
  )
}