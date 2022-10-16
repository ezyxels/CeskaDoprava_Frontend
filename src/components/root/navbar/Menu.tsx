import SocialLinks from "@components/root/socials/SocialLinks";
import { useEffect, useState } from "react";
import MenuAdditionalLinks from "./MenuAdditionalLinks";
import MenuButton from "./MenuButton";
import MenuMainLinks from "./MenuMainLinks";

type MenuOptions = {
  className?: string;
};

export default function Menu({ className = "" }: MenuOptions) {
  let [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add("helper-scroll-lock");
    } else {
      document.body.classList.remove("helper-scroll-lock");
    }
    return () => { };
  }, [isOpen]);

  return (
    <>
      <MenuButton
        onClick={toggleMenu}
        isActivated={isOpen}
        className={`relative z-[120] ${className}`}
      />
      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 h-screen w-screen cursor-pointer bg-primary/20 backdrop-blur-lg transition-[opacity,visibility] ease-out ${isOpen
          ? "visible opacity-100 duration-[400ms]"
          : "invisible opacity-0 duration-150"
          }`}
      ></div>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[115] h-screen w-screen overflow-y-auto bg-white transition-[opacity,visibility,transform,shadow] ease-out md:w-[50vw] ${isOpen
          ? "visible translate-x-0 opacity-100 shadow-2xl duration-[400ms]"
          : "invisible translate-x-full opacity-0 shadow-none duration-150"
          }`}
      >
        <div className="flex px-5 flex-col md:h-full mx-auto w-fit md:justify-center pt-24 md:pt-0 space-y-16">
          <MenuMainLinks
            onEachLinkClick={closeMenu}
            className={`transform-gpu transition-[transform,opacity] ease-out ${isOpen
              ? "translate-y-0 opacity-100 delay-150 duration-500"
              : "duration-0 -translate-y-12 opacity-0 delay-150"
              }`}
          />
          <MenuAdditionalLinks
            className={`transform-gpu transition-[transform,opacity] ease-out ${isOpen
              ? "translate-y-0 opacity-100 delay-300 duration-500"
              : "duration-0 -translate-y-12 opacity-0 delay-150"
              }`}
          />
          <SocialLinks
            className={`transform-gpu transition-[transform,opacity] ease-out ${isOpen
              ? "translate-y-0 opacity-100 delay-[450ms] duration-500"
              : "duration-0 -translate-y-12 opacity-0 delay-150"
              }`}
          />
        </div>
      </div>
    </>
  );
}
