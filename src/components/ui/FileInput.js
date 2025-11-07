import React from 'react';

const FileInput = ({
  label,
  onChange,
  required = false,
  className = '',
  labelClassName = '',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  helperText = '',
  error = '',
  ...props
}) => {
  const border = error
    ? 'border-b-red-500 focus-within:border-red-500'
    : 'border-b-gray-300 focus-within:border-blue-500';
  return (
    <div className={`file-input-container ${className}`}>
      {label && (
        <label className={`block text-sm font-medium text-gray-700 ${labelClassName}`}>
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
          type="file"
          onChange={onChange}
          className={`mt-1 block w-full text-sm text-gray-700 bg-transparent focus:outline-none ${LeftIcon ? 'pl-10' : 'pl-0'} ${RightIcon ? 'pr-10' : ''}`}
          required={required}
          {...props}
        />
        {RightIcon ? (
          <span className="absolute right-2 text-gray-500">
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

export default FileInput;
