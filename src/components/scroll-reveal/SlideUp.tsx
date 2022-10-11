import { useInView } from "react-intersection-observer";

type SlideUpOptions = {
  as?: React.ElementType;
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
    | "1500";
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

const delayClasses = {
  "0": "reveal-delay-0",
  "100": "reveal-delay-100",
  "200": "reveal-delay-200",
  "300": "reveal-delay-300",
  "400": "reveal-delay-400",
  "500": "reveal-delay-500",
  "600": "reveal-delay-600",
  "700": "reveal-delay-700",
  "800": "reveal-delay-800",
  "900": "reveal-delay-900",
  "1000": "reveal-delay-1000",
  "1100": "reveal-delay-1100",
  "1200": "reveal-delay-1200",
  "1300": "reveal-delay-1300",
  "1400": "reveal-delay-1400",
  "1500": "reveal-delay-1500",
};

export default function SlideUp({
  as: Tag = "div",
  delay = "0",
  className = "",
  children,
  ...rest
}: SlideUpOptions) {
  const [element, view] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <Tag
      ref={element}
      className={`lib-scroll-reveal reveal-slide-up-hidden ${
        delayClasses[delay]
      } ${view ? "reveal-slide-up-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
