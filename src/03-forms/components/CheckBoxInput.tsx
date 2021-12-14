import { useField } from "formik"

interface Props {
  id: string;
  label: string;
  name: string;
  [key: string]: any;
}

export const CheckBoxInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>
        <input type="checkbox" {...props}  {...field} />
        {label}
      </label>
      {
        meta.touched && meta.error && <span className="error">{meta.error}</span>
      }
    </>
  )
}
