// Fun fact
// Z tohoto komponentu lze poskládat 5244 různých vzhledů tlačítek

import { forwardRef } from "react";
import { CgSpinner } from "react-icons/cg";

type ButtonOptions = {
  children: string;
  as?: React.ElementType;
  variant?: "filled" | "tinted" | "outlined" | "plain";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "muted"
    | "rich";
  shape?: "square" | "rounded" | "pill";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isIconBox?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

export type Ref = HTMLButtonElement;

// Variant classes
const variantClasses = {
  filled: "text-opacity-95",
  tinted:
    "bg-opacity-10 dark:bg-opacity-10 hover:bg-opacity-25 dark:hover:bg-opacity-25",
  outlined:
    "shadow-[inset_0px_0px_0px_1.5px] bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-100 dark:hover:bg-opacity-100",
  plain:
    "bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-10",
};

// Filled variant color classes
const filledColorClasses = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-white",
  success: "bg-success text-white",
  error: "bg-error text-white",
  warning: "bg-warning text-gray-900",
  info: "bg-info text-white",
  light: "bg-gray-100 text-gray-900",
  dark: "bg-gray-900 text-white",
  muted: "bg-muted text-invert",
  rich: "bg-rich text-invert",
};

// Tinted color classes
const tintedColorClasses = {
  primary: "bg-primary text-primary",
  secondary: "bg-secondary text-secondary",
  tertiary: "bg-tertiary text-tertiary",
  success: "bg-success text-success",
  error: "bg-error text-error",
  warning: "bg-warning text-warning",
  info: "bg-info text-info",
  light: "bg-gray-100 text-white",
  dark: "bg-gray-800 text-gray-900",
  muted: "bg-muted text-muted",
  rich: "bg-rich text-rich",
};

// Outlined color classes
const outlinedColorClasses = {
  primary:
    "bg-primary text-primary shadow-primary hover:text-white dark:hover:text-white",
  secondary:
    "bg-secondary text-secondary shadow-secondary hover:text-white dark:hover:text-white",
  tertiary:
    "bg-tertiary text-tertiary shadow-tertiary hover:text-white dark:hover:text-white",
  success: "bg-success text-success shadow-success hover:text-white",
  error: "bg-error text-error shadow-error hover:text-white",
  warning: "bg-warning text-warning shadow-warning hover:text-gray-900",
  info: "bg-info text-info shadow-info hover:text-white",
  light:
    "bg-gray-100 text-gray-100 shadow-gray-100 hover:text-gray-900 dark:hover:text-gray-900",
  dark: "bg-gray-900 text-gray-900 shadow-gray-900 hover:text-white dark:hover:text-white",
  muted:
    "bg-muted text-muted shadow-muted hover:text-invert dark:hover:text-invert",
  rich: "bg-rich text-rich shadow-rich hover:text-invert dark:hover:text-invert",
};

// Plain color classes
const plainColorClasses = {
  primary: "bg-primary text-primary",
  secondary: "bg-secondary text-secondary",
  tertiary: "bg-tertiary text-tertiary",
  success: "bg-success text-success",
  error: "bg-error text-error",
  warning: "bg-warning text-warning",
  info: "bg-info text-info",
  light: "bg-gray-100 text-white",
  dark: "bg-gray-800 text-gray-900",
  muted: "bg-muted text-muted",
  rich: "bg-rich text-rich",
};

// Focus classes for each color
const focusClasses = {
  primary: "focus-visible:ring-4 focus-visible:ring-primary/70",
  secondary: "focus-visible:ring-4 focus-visible:ring-secondary/70",
  tertiary: "focus-visible:ring-4 focus-visible:ring-tertiary/70",
  success: "focus-visible:ring-4 focus-visible:ring-success/70",
  error: "focus-visible:ring-4 focus-visible:ring-error/70",
  warning: "focus-visible:ring-4 focus-visible:ring-warning/70",
  info: "focus-visible:ring-4 focus-visible:ring-info/70",
  light: "focus-visible:ring-4 focus-visible:ring-white/70",
  dark: "focus-visible:ring-4 focus-visible:ring-gray-900/70",
  muted: "focus-visible:ring-4 focus-visible:ring-rich/70",
  rich: "focus-visible:ring-4 focus-visible:ring-rich/70",
};

// Shape classes
const shapeClasses = {
  square: "rounded-none",
  rounded: "rounded-md",
  pill: "rounded-full",
};

// Size classes
const sizeClasses = {
  xs: "px-3 py-2 text-xs",
  sm: "px-4 py-3 text-sm",
  base: "px-6 py-4 text-base",
  lg: "px-8 py-5 text-lg",
  xl: "px-9 py-6 text-xl",
};

const sizeIconBoxClasses = {
  xs: "p-1.5 text-xs aspect-[1/1]",
  sm: "p-2 text-sm aspect-[1/1]",
  base: "p-3 text-base aspect-[1/1]",
  lg: "p-4 text-lg aspect-[1/1]",
  xl: "p-5 text-2xl aspect-[1/1]",
};

const Button = forwardRef<Ref, ButtonOptions>(
  (
    {
      as: Tag = "button",
      variant = "filled",
      color = "primary",
      shape = "rounded",
      size = "base",
      leftIcon = null,
      rightIcon = null,
      isIconBox = false,
      isLoading = false,
      isDisabled = false,
      className = "",
      onClick,
      children,
      ...rest
    },
    ref
  ) => (
    <Tag
      ref={ref}
      className={`group relative isolate inline-flex items-center justify-center overflow-hidden font-semibold leading-none tracking-wide no-underline outline-none transition-colors duration-200 will-change-transform 
      ${variantClasses[variant]}
      ${variant === "filled" ? filledColorClasses[color] : ""} 
      ${variant === "tinted" ? tintedColorClasses[color] : ""} 
      ${variant === "outlined" ? outlinedColorClasses[color] : ""}
      ${variant === "plain" ? plainColorClasses[color] : ""}
      ${shapeClasses[shape]} ${focusClasses[color]}
      ${isIconBox ? sizeIconBoxClasses[size] : sizeClasses[size]}
      ${
        isLoading ? "pointer-events-none cursor-not-allowed" : "cursor-pointer"
      } 
      ${isDisabled ? "pointer-events-none opacity-60 grayscale-[30%]" : ""} 
  ${className}
  `}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      aria-hidden={isDisabled || isLoading}
      tabIndex={isDisabled || isLoading ? "-1" : "0"}
      {...rest}
    >
      {/* Left icon */}
      {leftIcon !== null && (
        <span
          className={`z-[1] mr-3 text-[1.1em] ${isLoading ? "invisible" : ""}`}
        >
          {leftIcon}
        </span>
      )}

      {/* Hover for filled type */}
      {variant === "filled" && (
        <span
          className={`absolute inset-0 z-[-1] opacity-0 transition-opacity duration-200 group-hover:opacity-20 ${
            color === "dark" ? "bg-gray-400" : "bg-gray-900"
          }`}
        ></span>
      )}

      {/* Text */}
      <span
        className={`z-[1] ${isLoading ? "invisible" : ""} ${
          isIconBox ? "scale-[1.25]" : ""
        }`}
      >
        {children}
      </span>

      {/* Left icon */}
      {rightIcon !== null && (
        <span
          className={`z-[1] ml-3 text-[1.1em] ${isLoading ? "invisible" : ""}`}
        >
          {rightIcon}
        </span>
      )}

      {/* Loading spinner */}
      {isLoading && (
        <CgSpinner className="z-1 absolute inset-0 m-auto h-[1.8em] w-[1.8em] animate-spinner" />
      )}
    </Tag>
  )
);

Button.displayName = "Button"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

export default Button;
