import React, { ButtonHTMLAttributes } from "react";
import { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-meduim transition-color focus:outlin-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disableed:opacity-50 disablede:pinter-event-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-2 px-3",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 size-4 animate-spin " /> : null}
      {children}
    </button>
  );
};
export default Button;
