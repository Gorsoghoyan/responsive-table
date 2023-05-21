import s from "./styles.module.scss";

export default function Input({
  variant,
  type,
  name,
  value,
  placeholder,
  readOnly,
  onChange
}) {
  return (
    <input 
      className={s[variant]}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
}