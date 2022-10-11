type HeadingOptions = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size: "2xs" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "none";
  color?:
  | "rich"
  | "muted"
  | "white"
  | "black"
  | "primary"
  | "secondary"
  | "tertiary"
  | "none";
  align?: "left" | "center" | "right" | "justify" | "inherit";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  font?: "sans" | "display" | "serif" | "mono";
  hasSeparator?: boolean;
  separatorPosition?: "left" | "center" | "right";
  separatorColor?:
  | "primary"
  | "secondary"
  | "tertiary"
  | "white"
  | "black"
  | "current";
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// Size classes -> https://tailwindcss.com/docs/font-size
const sizeClasses = {
  "2xs": "text-sm",
  xs: "text-base",
  sm: "text-lg",
  base: "text-xl xs:text-2xl",
  lg: "text-2xl xs:text-3xl lg:text-5xl",
  xl: "text-3xl xs:text-4xl lg:text-6xl",
  "2xl": "text-3xl xs:text-4xl sm:text-5xl lg:text-7xl",
  "3xl": "text-4xl xs:text-5xl sm:text-7xl lg:text-9xl",
  none: "",
};

// Color classes
const colorClasses = {
  rich: "text-rich",
  muted: "text-muted",
  white: "text-white",
  black: "text-gray-900",
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  none: "",
};

// Align classes
const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  inherit: "",
};

// Font classes
const fontClasses = {
  sans: "font-sans",
  display: "font-display",
  serif: "font-serif",
  mono: "font-mono",
};

// Weight classes
const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

// Separator classes
const separatorBaseClasses =
  "relative pb-6 after:absolute after:content-[''] after:bottom-0 after:w-16 after:h-[3px]";

const separatorPositionClasses = {
  left: "after:left-0 after:right-auto",
  center: "after:left-1/2 after:-translate-x-1/2",
  right: "after:left-auto after:right-0",
};

const separatorColorClasses = {
  primary: "after:bg-primary",
  secondary: "after:bg-secondary",
  tertiary: "after:bg-tertiary",
  white: "after:bg-white",
  black: "after:bg-gray-900",
  current: "after:bg-current",
};

export default function Heading({
  level = 1,
  size = "lg",
  color = "rich",
  align = "inherit",
  weight = "bold",
  font = "sans",
  hasSeparator = false,
  separatorPosition = "left",
  separatorColor = "primary",
  className = "",
  children,
  ...rest
}: HeadingOptions) {
  // dynamic tag generated from level prop
  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag
      className={`leading-[1.2] 
      ${sizeClasses[size]} 
      ${colorClasses[color]}
      ${alignClasses[align]}
      ${weightClasses[weight]}
      ${fontClasses[font]}
       ${hasSeparator
          ? separatorBaseClasses +
          " " +
          separatorPositionClasses[separatorPosition] +
          " " +
          separatorColorClasses[separatorColor]
          : ""
        } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
