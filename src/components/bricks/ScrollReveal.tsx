import { useInView } from "react-intersection-observer";

type TemplateProps = {
  as?: React.ElementType;
  animation?:
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "zoom-out"
  | "flip";
  delay?:
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600";
  xsDelay?:
  | "none"
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600";
  smDelay?:
  | "none"
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600";
  mdDelay?:
  | "none"
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600";
  lgDelay?:
  | "none"
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600";
  xlDelay?:
  | "none"
  | "0"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600";
  duration?:
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600"
  | "2000"
  | "2500"
  | "3000";
  staggerChildren?: boolean;
  staggerChildrenIncrement?: "100" | "200" | "300" | "400" | "500";
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

const animationHiddenClasses = {
  fade: "sra-fade-hidden",
  "slide-up": "sra-slide-up-hidden",
  "slide-down": "sra-slide-down-hidden",
  "slide-left": "sra-slide-left-hidden",
  "slide-right": "sra-slide-right-hidden",
  "zoom-in": "sra-zoom-in-hidden",
  "zoom-out": "sra-zoom-out-hidden",
  flip: "sra-flip-hidden",
};
const animationVisibleClasses = {
  fade: "sra-fade-visible",
  "slide-up": "sra-slide-up-visible",
  "slide-down": "sra-slide-down-visible",
  "slide-left": "sra-slide-left-visible",
  "slide-right": "sra-slide-right-visible",
  "zoom-in": "sra-zoom-in-visible",
  "zoom-out": "sra-zoom-out-visible",
  flip: "sra-flip-visible",
};

const delayClasses = {
  "0": "sra-delay-0",
  "100": "sra-delay-100",
  "200": "sra-delay-200",
  "300": "sra-delay-300",
  "400": "sra-delay-400",
  "500": "sra-delay-500",
  "600": "sra-delay-600",
  "700": "sra-delay-700",
  "800": "sra-delay-800",
  "900": "sra-delay-900",
  "1000": "sra-delay-1000",
  "1100": "sra-delay-1100",
  "1200": "sra-delay-1200",
  "1300": "sra-delay-1300",
  "1400": "sra-delay-1400",
  "1500": "sra-delay-1500",
  "1600": "sra-delay-1600",
};
const xsDelayClasses = {
  none: "",
  "0": "xs:sra-delay-0",
  "100": "xs:sra-delay-100",
  "200": "xs:sra-delay-200",
  "300": "xs:sra-delay-300",
  "400": "xs:sra-delay-400",
  "500": "xs:sra-delay-500",
  "600": "xs:sra-delay-600",
  "700": "xs:sra-delay-700",
  "800": "xs:sra-delay-800",
  "900": "xs:sra-delay-900",
  "1000": "xs:sra-delay-1000",
  "1100": "xs:sra-delay-1100",
  "1200": "xs:sra-delay-1200",
  "1300": "xs:sra-delay-1300",
  "1400": "xs:sra-delay-1400",
  "1500": "xs:sra-delay-1500",
  "1600": "xs:sra-delay-1600",
};
const smDelayClasses = {
  none: "",
  "0": "sm:sra-delay-0",
  "100": "sm:sra-delay-100",
  "200": "sm:sra-delay-200",
  "300": "sm:sra-delay-300",
  "400": "sm:sra-delay-400",
  "500": "sm:sra-delay-500",
  "600": "sm:sra-delay-600",
  "700": "sm:sra-delay-700",
  "800": "sm:sra-delay-800",
  "900": "sm:sra-delay-900",
  "1000": "sm:sra-delay-1000",
  "1100": "sm:sra-delay-1100",
  "1200": "sm:sra-delay-1200",
  "1300": "sm:sra-delay-1300",
  "1400": "sm:sra-delay-1400",
  "1500": "sm:sra-delay-1500",
  "1600": "sm:sra-delay-1600",
};
const mdDelayClasses = {
  none: "",
  "0": "md:sra-delay-0",
  "100": "md:sra-delay-100",
  "200": "md:sra-delay-200",
  "300": "md:sra-delay-300",
  "400": "md:sra-delay-400",
  "500": "md:sra-delay-500",
  "600": "md:sra-delay-600",
  "700": "md:sra-delay-700",
  "800": "md:sra-delay-800",
  "900": "md:sra-delay-900",
  "1000": "md:sra-delay-1000",
  "1100": "md:sra-delay-1100",
  "1200": "md:sra-delay-1200",
  "1300": "md:sra-delay-1300",
  "1400": "md:sra-delay-1400",
  "1500": "md:sra-delay-1500",
  "1600": "md:sra-delay-1600",
};
const lgDelayClasses = {
  none: "",
  "0": "lg:sra-delay-0",
  "100": "lg:sra-delay-100",
  "200": "lg:sra-delay-200",
  "300": "lg:sra-delay-300",
  "400": "lg:sra-delay-400",
  "500": "lg:sra-delay-500",
  "600": "lg:sra-delay-600",
  "700": "lg:sra-delay-700",
  "800": "lg:sra-delay-800",
  "900": "lg:sra-delay-900",
  "1000": "lg:sra-delay-1000",
  "1100": "lg:sra-delay-1100",
  "1200": "lg:sra-delay-1200",
  "1300": "lg:sra-delay-1300",
  "1400": "lg:sra-delay-1400",
  "1500": "lg:sra-delay-1500",
  "1600": "lg:sra-delay-1600",
};
const xlDelayClasses = {
  none: "",
  "0": "xl:sra-delay-0",
  "100": "xl:sra-delay-100",
  "200": "xl:sra-delay-200",
  "300": "xl:sra-delay-300",
  "400": "xl:sra-delay-400",
  "500": "xl:sra-delay-500",
  "600": "xl:sra-delay-600",
  "700": "xl:sra-delay-700",
  "800": "xl:sra-delay-800",
  "900": "xl:sra-delay-900",
  "1000": "xl:sra-delay-1000",
  "1100": "xl:sra-delay-1100",
  "1200": "xl:sra-delay-1200",
  "1300": "xl:sra-delay-1300",
  "1400": "xl:sra-delay-1400",
  "1500": "xl:sra-delay-1500",
  "1600": "xl:sra-delay-1600",
};

const durationClasses = {
  "100": "sra-duration-100",
  "200": "sra-duration-200",
  "300": "sra-duration-300",
  "400": "sra-duration-400",
  "500": "sra-duration-500",
  "600": "sra-duration-600",
  "700": "sra-duration-700",
  "800": "sra-duration-800",
  "900": "sra-duration-900",
  "1000": "sra-duration-1000",
  "1100": "sra-duration-1100",
  "1200": "sra-duration-1200",
  "1300": "sra-duration-1300",
  "1400": "sra-duration-1400",
  "1500": "sra-duration-1500",
  "1600": "sra-duration-1600",
  "2000": "sra-duration-2000",
  "2500": "sra-duration-2500",
  "3000": "sra-duration-3000",
};

const staggerChildrenIncrementClasses = {
  "100": "sra-increment-100",
  "200": "sra-increment-200",
  "300": "sra-increment-300",
  "400": "sra-increment-400",
  "500": "sra-increment-500",
};

export default function Template({
  as: Tag = "div",
  animation = "slide-up",
  duration = "900",
  delay = "0",
  xsDelay = "none",
  smDelay = "none",
  mdDelay = "none",
  lgDelay = "none",
  xlDelay = "none",
  staggerChildren = false,
  staggerChildrenIncrement = "200",
  className = "",
  children,
  ...rest
}: TemplateProps) {
  const [element, view] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <Tag
      ref={element}
      className={`
        ${staggerChildren ? "lib-sra-children" : "lib-sra"}
        ${animationHiddenClasses[animation]} 
        ${view ? animationVisibleClasses[animation] : ""} 
        ${durationClasses[duration]} 
        ${staggerChildren === false &&
        delayClasses[delay] +
        xsDelayClasses[xsDelay] +
        smDelayClasses[smDelay] +
        mdDelayClasses[mdDelay] +
        lgDelayClasses[lgDelay] +
        xlDelayClasses[xlDelay]
        }
        ${staggerChildren &&
        staggerChildrenIncrementClasses[staggerChildrenIncrement]
        }
        ${className}
      `}
      {...rest}
    >
      {children}
    </Tag>
  );
}
