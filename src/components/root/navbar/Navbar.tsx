import BrandLogo from "@components/bricks/BrandLogo";
import Wrapper from "@components/bricks/Wrapper";
import useScrollListener from "@hooks/useScrollListener";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import NavbarAdditionalLinks from "./NavbarAdditionalLinks";
import NavbarMainLinks from "./NavbarMainLinks";

export default function Navbar() {
  // // State
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // // use Scroll Listener hook
  const scroll = useScrollListener();

  useEffect(() => {
    // Aktivuje třídu po scrollnutí o více než 60px
    if (scroll.y > 60) {
      setIsNavbarScrolled(true);
    } else {
      setIsNavbarScrolled(false);
    }

  }, [scroll.y, scroll.lastY]);
  return (
    <nav
      className={`fixed z-[100] h-20 w-screen transition duration-500 bg-white  ${isNavbarScrolled && "shadow-2xl"
        }`}
    >
      <Wrapper
        size="lg"
        className="flex h-full items-center justify-between gap-4 xl:gap-10"
      >
        <Link href="/">
          <a className="text-2xl font-bold z-[110] mr-auto outline-none focus-visible:ring-4 focus-visible:ring-primary/70 flex items-center h-full">
            Česká doprava
          </a>
        </Link>
        <NavbarMainLinks className="hidden lg:flex" />
        <NavbarAdditionalLinks />
        <Menu />
      </Wrapper>
    </nav>
  );
}
