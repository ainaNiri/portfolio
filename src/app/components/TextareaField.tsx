import { FieldError } from "react-hook-form";

type TextAreaFieldProps = {
  placeholder: string;
  type?: string;
  register: any;
  name: string;
  error?: FieldError;
  className?: string;
  rows: number;
};

const TextAreaField = ({
  placeholder,
  type = "text",
  register,
  name,
  error,
  className,
  rows,
}: TextAreaFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full mb-8">
      <textarea
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`input-focus bg-transparent border border-white/6 rounded-md px-4 py-3 mt-4 w-full resize-none ${className}`}
        rows={rows}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default TextAreaField;
