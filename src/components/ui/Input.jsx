import s from "../../sass/input.module.scss";

export default function Input({
  variant,
  type,
  name,
  value,
  placeholder,
}) {
  return (
    <input 
      className={s[variant]}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
}