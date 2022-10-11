import { socials } from "@configs/socials";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

type SocialLinksOptions = {
  as?: React.ElementType;
  className?: string;
  [x: string]: any;
};

export default function SocialLinks({
  as: Tag = "div",
  className = "",
  ...rest
}: SocialLinksOptions) {
  return (
    <Tag className={`${className}`} {...rest}>
      <ul className="flex gap-x-10">
        <li>
          <a
            href={socials.facebook.link}
            aria-label={socials.facebook.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-muted flex items-center justify-center transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaFacebookF className="mr-2"/>
            Facebook
          </a>
        </li>
        <li>
          <a
            href={socials.instagram.link}
            aria-label={socials.instagram.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-muted flex items-center justify-center transition-colors duration-150 ease-in-out hover:text-primary"
          >
            <FaInstagram className="mr-2"/>
            Instagram
          </a>
        </li>
      </ul>
    </Tag>
  );
}
