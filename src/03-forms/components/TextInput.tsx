import { ErrorMessage, useField } from "formik"

interface Props {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
  [key: string]: any;
}

export const TextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} {...field} className="text-input" />
      <ErrorMessage name={props.name} component="span" className="error" />
    </>
  )
}
