import { useField } from "formik"

interface Props {
  id: string;
  label: string;
  name: string;
  [key: string]: any;
}

export const SelectInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <select {...props}  {...field} />
      {
        meta.touched && meta.error && <span className="error">{meta.error}</span>
      }
    </>
  )
}
