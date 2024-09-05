import React from 'react';

const FileInput = ({
  label,
  onChange,
  required = false,
  className = '',
  labelClassName = '',
  ...props
}) => {
  return (
    <div className={`file-input-container ${className}`}>
      {label && (
        <label className={`block text-sm font-medium text-gray-700 ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        type="file"
        onChange={onChange}
        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-white hover:file:bg-yellow-600"
        required={required}
        {...props}
      />
    </div>
  );
};

export default FileInput;
