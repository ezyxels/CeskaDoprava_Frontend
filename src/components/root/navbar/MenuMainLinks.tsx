import { mainRoutes } from "@configs/routes";
import Link from "next/link";

type MenuMainLinksOptions = {
  className?: string;
  onEachLinkClick?: () => void;
};

export default function MenuMainLinks({
  className = "",
  onEachLinkClick,
}: MenuMainLinksOptions) {
  return (
    <ul
      className={`flex list-none flex-col items-start space-y-5 leading-none ${className}`}
    >
      {mainRoutes.map((route) => (
        <li key={route.label}>
          <Link href={route.path}>
            <a
              className="c-link-3-a text-3xl font-bold text-rich outline-none focus-visible:ring-4 focus-visible:ring-primary/70 md:text-3xl xl:text-4xl"
              onClick={onEachLinkClick}
            >
              {route.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
