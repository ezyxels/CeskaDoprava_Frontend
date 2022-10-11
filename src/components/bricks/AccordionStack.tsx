type AccordionStackProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export default function AccordionStack({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: AccordionStackProps) {
  // Logic goes here
  return (
    <Tag
      className={`flex flex-col divide-y divide-rich/10 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
