import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { TextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormik = () => {

  return (
    <div>
      <h1>Register Formik</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password2: '',
        }}
        validationSchema={yup.object({
          name: yup.string()
            .min(2, 'No puedes tener menos de dos carácteres')
            .max(15, 'Máximo 15 caracteres')
            .required('Obligatorio'),
          email: yup.string()
            .email('No es un email válido')
            .required('Obligatorio'),
          password: yup.string()
            .min(6, 'La contraseña debe ser mínimo 6 carácteres')
            .required('Obligatorio'),
          password2: yup.string()
            .required('Obligatorio')
            .oneOf([yup.ref('password')], 'Las contraseñas no son iguales'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleReset }) => (
          <Form>
            <TextInput id='name' label='Name' name='name' type='text' />
            <TextInput id='email' label='Email' name='email' type='email' />

            <TextInput id='password' label='Password' name='password' type='password' />
            <TextInput id='password2' label='Repeat Password' name='password2' type='password' />

            <button
              type='submit'
            >Create</button>

            <button
              type='button'
              onClick={handleReset}
            >Reset</button>
          </Form>
        )}
      </Formik>


    </div>
  )
}
