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
  ...props
}) => {
  return (
    <div className={`textarea-container ${className}`}>
      {label && (
        <label className={`block text-sm font-medium text-gray-700 ${labelClassName}`}>
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:shadow-lg focus:outline-none bg-transparent text-black"
        rows={rows}
        required={required}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Textarea;
