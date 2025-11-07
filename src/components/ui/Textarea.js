import React from 'react';

const Textarea = ({
  label,
  value,
  onChange,
  rows = 4,
  required = false,
  placeholder = '',
  className = '',
  labelClassName = '',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  error = '',
  helperText = '',
  ...props
}) => {
  const border = error
    ? 'border-b-red-500 focus-within:border-red-500'
    : 'border-b-gray-300 focus-within:border-blue-500';
  return (
    <div className={`textarea-container ${className}`}>
      {label && (
        <label className={`block text-sm font-medium text-gray-700 ${labelClassName}`}>
          {label}
        </label>
      )}
      <div className={`relative flex items-start border-b ${border} focus-within:shadow-lg`}>
        {LeftIcon ? (
          <span className="absolute left-2 top-2 text-gray-500">
            <LeftIcon className="h-5 w-5" />
          </span>
        ) : null}
        <textarea
          value={value}
          onChange={onChange}
          className={`w-full bg-transparent text-black placeholder-gray-400 focus:outline-none py-2 ${LeftIcon ? 'pl-10' : 'pl-3'} ${RightIcon ? 'pr-10' : 'pr-3'}`}
          rows={rows}
          required={required}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          {...props}
        />
        {RightIcon ? (
          <span className="absolute right-2 top-2 text-gray-500">
            <RightIcon className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      {helperText || error ? (
        <p className={`mt-1 text-xs ${error ? 'text-red-500' : 'text-gray-500'}`}>
          {error || helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Textarea;
