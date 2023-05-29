import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'primary-outline', 'error']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool
}

export default function Input({
    type = 'text',
    name,
    value,
    defaultValue,
    className = '',
    variant = 'primary',
    autoComplete,
    required,
    isFocused = false,
    handleChange,
    placeholder,
    isError = false,
    ...props
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                name={name}
                value={value}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
};
