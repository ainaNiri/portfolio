import { ChangeEvent } from "react";
import { FieldError } from "react-hook-form";

type InputFieldProps = {
  placeholder: string;
  type?: string;
  register: any;
  name: string;
  error?: FieldError;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  placeholder,
  type = "text",
  register,
  name,
  error,
  className,
  onChange,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`input-focus bg-transparent border border-white/6 rounded-md px-4 py-3 ${className}`}
        {...inputProps}
        onChange={onChange}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
