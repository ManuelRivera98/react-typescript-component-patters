import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const Register = () => {

  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  const {
    name,
    email,
    password,
    password2,
    onChange,
    reset,
    isValidEmail,
  } = useForm(initialState)


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register</h1>

      <form
        onSubmit={onSubmit}
      >

        <input
          name='name'
          type="text"
          placeholder="Name"
          value={name}
          className={`${name.trim().length <= 0 && 'has-error'}`}
          onChange={onChange}
        />

        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

        <input
          name='email'
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />

        {!isValidEmail(email) && <span>El email no es válido</span>}

        <input
          name='password'
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />

        {password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña tiene que tener mínimo 6 carácteres</span>}

        <input
          name='password2'
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />

        {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password2.trim().length > 0 && password !== password2 && <span>Las contraseñas deben ser iguales</span>}

        <button
          type='submit'
        >Create</button>

        <button
          type='button'
          onClick={reset}
        >Reset</button>

      </form>
    </div>
  )
}
