import Link from "next/link";
import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import { FaCookieBite } from "react-icons/fa";

export default function CookieConsentBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, setIsScrolled]);
  return (
    <CookieConsent
      // debug={true}
      cookieName="ffp-2022"
      location="bottom"
      disableStyles={true}
      disableButtonStyles={true}
      enableDeclineButton
      buttonText="Souhlasím"
      declineButtonText="Zakázat"
      buttonClasses="font-semibold py-2 px-3 text-xs text-white bg-primary hover:bg-opacity-70 transition-colors duration-200 outline-none focus-visible:ring-4 focus-visible:ring-primary/70"
      declineButtonClasses="font-semibold py-2 px-3 text-gray-900 text-xs bg-white hover:bg-opacity-70 transition-colors duration-200 outline-none focus-visible:ring-4 focus-visible:ring-white/70"
      expires={183}
      containerClasses={`${
        isScrolled
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible md:translate-x-4"
      } fixed w-full sm:w-auto flex flex-col lg:flex-row items-start lg:items-center gap-5 bottom-0 sm:-translate-y-5 right-0 sm:right-5 z-[90] bg-body-100 max-w-3xl backdrop-blur-md p-6 transition-[transform,opacity,visibility] duration-300`}
      buttonWrapperClasses="flex gap-3"
    >
      <div className="flex items-center justify-start gap-4">
        <FaCookieBite className="mb-0 text-base sm:text-lg lg:text-2xl" />
        <span className="block text-xs md:text-sm">
          Tato webová stránka používá cookies.{" "}
          <Link href="/cookies">
            <a className="c-link-3-a outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
              Zjistit více.
            </a>
          </Link>
        </span>
      </div>
    </CookieConsent>
  );
}
