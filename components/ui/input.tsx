import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode; // Fixed typo: changed "chlidren" to "children"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative flex h-11 w-full items-center rounded-[8px] border border-input bg-white px-3 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:opacity-50",
          className
        )}
      >
        {children && (
          <span className="pointer-events-none absolute right-3 text-muted-foreground">
            {children}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "w-full bg-transparent py-2 pl-3 pr-3 placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed",
            children && "pr-10"
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
