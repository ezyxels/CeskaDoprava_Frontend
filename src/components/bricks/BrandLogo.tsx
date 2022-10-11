type BrandLogoOptions = {
  className?: string;
};

export default function BrandLogo({ className = "" }: BrandLogoOptions) {
  return (
    <div className={`h-[46px] w-[128px] ${className}`}>
      <img
        src="/logos/FFP-2022-logo-primary-dark.svg"
        alt="Logo značky"
        width="128"
        height="46"
        className="h-full w-full"
      />
    </div>
  );
}
