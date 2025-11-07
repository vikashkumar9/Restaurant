"use client"
import React from "react";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  error = "",
  helperText = "",
  className = "",
  labelClassName = "",
  inputClassName = "",
  name,
  id,
}) => {
  const hasLeft = Boolean(LeftIcon);
  const hasRight = Boolean(RightIcon);
  const baseInput = "w-full bg-transparent text-black placeholder-gray-400 focus:outline-none";
  const border = error
    ? "border-b-red-500 focus:border-red-500"
    : "border-b-gray-300 focus:border-blue-500";
  const paddingX = `${hasLeft ? "pl-10" : "pl-3"} ${hasRight ? "pr-10" : "pr-3"}`;
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className={`block mb-2 text-sm font-medium text-black ${labelClassName}`}>
          {label}
        </label>
      )}
      <div className={`relative flex items-center border-b ${border} focus-within:shadow-lg`}>
        {LeftIcon ? (
          <span className="absolute left-2 text-gray-500">
            <LeftIcon className="h-5 w-5" />
          </span>
        ) : null}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          className={`${baseInput} ${paddingX} py-2 ${inputClassName}`}
        />
        {RightIcon ? (
          <span className="absolute right-2 text-gray-500">
            <RightIcon className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      {helperText || error ? (
        <p className={`mt-1 text-xs ${error ? "text-red-500" : "text-gray-500"}`}>
          {error || helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
