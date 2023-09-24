import React from "react";

// utils
import { cn } from "~/utils/cn";

interface InputProps {
  type:
    | "text"
    | "number"
    | "password"
    | "radio"
    | "checkbox"
    | "address"
    | "website"
    | "search";
  value: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { className, ...rest } = props;

    return (
      <input
        ref={ref}
        className={cn(
          "flex w-full rounded-lg border border-input bg-background px-3 py-3 text-sm font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...rest}
      />
    );
  }
);

export default Input;
