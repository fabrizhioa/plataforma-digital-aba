import React from "react";

export function VerifyInputForm({
  type,
  name,

  title,
  className = "",
  onChange,
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-600 ">
        {title}:
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={
          "outline-none  bg-white w-full p-2 rounded-sm resize-none disabled:cursor-not-allowed " +
          className
        }
        onChange={(e) => onChange(e.target)}
      />
    </div>
  );
}

export function InputFileForm({
  title,
  name,
  required = false,
  disabled = false,
  onChange,
  className = "",
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className={
          "block cursor-pointer disabled:cursor-not-allowed px-4 py-2 bg-slate-900 hover:bg-blue-700 text-white rounded-sm text-sm" +
          className
        }
        disabled={disabled}
      >
        {title}
      </label>
      <input
        type="file"
        className={"hidden"}
        id={name}
        name={name}
        onChange={(e) => onChange(e.target.files[0])}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export function InputForm({
  type,
  name,
  placeholder = "",
  required = false,
  className = "",
  disabled,
  defaultValue = "",
  title,
  value,
  onChange,
}) {
  let val =
    value === undefined
      ? defaultValue === undefined
        ? ""
        : defaultValue
      : value === false
      ? ""
      : value;

  return (
    <div>
      <label htmlFor={name} className="block text-gray-600 ">
        {title}:
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={
          "outline-none  bg-white w-full p-2 rounded-sm resize-none disabled:cursor-not-allowed " +
          className
        }
        disabled={disabled}
        value={val}
        onChange={(e) => onChange({ [name]: e.target.value })}
      />
    </div>
  );
}

export function TextAreaForm({
  name,
  className = "",
  boxClassName = "",
  titleClassName = "",
  required = false,
  disabled = false,
  title,
  value,
  defaultValue,
  onChange,
}) {
  let val =
    value === undefined
      ? defaultValue === undefined
        ? ""
        : defaultValue
      : value === false
      ? ""
      : value;

  return (
    <div className={boxClassName}>
      <label htmlFor={name} className={"block text-gray-600 " + titleClassName}>
        {title}:
      </label>
      <textarea
        name={name}
        id={name}
        rows="10"
        className={
          "bg-white p-2 rounded-sm w-full resize-none outline-none " + className
        }
        required={required}
        disabled={disabled}
        onChange={(e) => onChange({ [name]: e.target.value })}
        value={val}
      ></textarea>
    </div>
  );
}
