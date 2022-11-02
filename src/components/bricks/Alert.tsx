import { useState } from "react";
import {
  HiCheckCircle,
  HiExclamationCircle,
  HiInformationCircle,
  HiX,
  HiXCircle,
} from "react-icons/hi";

type AlertOptions = {
  as?: React.ElementType;
  title: string;
  text?: string;
  status?: "success" | "error" | "warning" | "info";
  variant?: "filled" | "tinted";
  hasIcon?: boolean;
  isDismissable?: boolean;
  isVisible?: boolean;
  className?: string;
  [x: string]: any;
};

const filledStatusClasses = {
  success: "bg-success text-white",
  error: "bg-error text-white",
  warning: "bg-warning text-white",
  info: "bg-info text-white",
};

const tintedStatusClasses = {
  success: "bg-success bg-opacity-15 text-success",
  error: "bg-error bg-opacity-15 text-error",
  warning: "bg-warning bg-opacity-15 text-warning",
  info: "bg-info bg-opacity-15 text-info",
};

export default function Alert({
  as: Tag = "div",
  title = "This is alert message",
  text,
  status = "info",
  variant = "filled",
  hasIcon = true,
  isDismissable = true,
  isVisible = true,
  className = "",
  ...rest
}: AlertOptions) {
  const [isShown, setIsShown] = useState(isVisible);

  function hideAlert() {
    setIsShown(false);
  }

  return isShown ? (
    <Tag
      className={`flex w-full items-start justify-between gap-5 rounded-lg py-6 px-5 ${
        variant === "filled"
          ? filledStatusClasses[status]
          : tintedStatusClasses[status]
      } ${className}`}
      {...rest}
    >
      <div className="mr-auto flex flex-col items-start justify-start gap-5 sm:flex-row">
        {hasIcon && status === "success" && (
          <div className="hidden xs:block sm:pt-1">
            <HiCheckCircle className="text-3xl" />
          </div>
        )}
        {hasIcon && status === "error" && (
          <div className="hidden xs:block sm:pt-1">
            <HiXCircle className="text-3xl" />
          </div>
        )}
        {hasIcon && status === "warning" && (
          <div className="hidden xs:block sm:pt-1">
            <HiExclamationCircle className="text-3xl" />
          </div>
        )}
        {hasIcon && status === "info" && (
          <div className="hidden xs:block sm:pt-1">
            <HiInformationCircle className="text-3xl" />
          </div>
        )}
        <div>
          <span className="text-lg font-semibold leading-tight sm:text-xl">
            {title}
          </span>
          {(text !== null || text !== undefined) && (
            <p className="text-sm sm:text-base">{text}</p>
          )}
        </div>
      </div>
      {isDismissable && (
        <button onClick={hideAlert} className="self-start text-xl sm:text-2xl">
          <HiX />
        </button>
      )}
    </Tag>
  ) : null;
}
