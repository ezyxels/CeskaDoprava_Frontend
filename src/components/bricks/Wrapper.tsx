type WrapperOptions = {
  as?: React.ElementType;
  children: React.ReactNode;
  size?: "sm" | "base" | "lg" | "fluid" | "full";
  paddedContent?: "sm" | "base" | "lg" | "none";
  className?: string;
  [x: string]: any;
};

const sizeClasses = {
  sm: "max-w-[840px]",
  base: "max-w-7xl",
  lg: "max-w-[1728px]",
  fluid: "",
  full: "w-full",
};

const paddedContentClasses = {
  sm: "py-16 xl:py-24",
  base: "py-24 xl:py-32",
  lg: "py-32 xl:py-44",
  none: "",
};

export default function Wrapper({
  as: Tag = "div",
  size = "base",
  paddedContent = "none",
  className = "",
  children,
  ...Options
}: WrapperOptions) {
  return (
    <Tag
      className={`mx-auto ${size !== "full" && "w-[90%]"} ${sizeClasses[size]} ${paddedContentClasses[paddedContent]} ${className}`}
      {...Options}
    >
      {children}
    </Tag>
  );
}
