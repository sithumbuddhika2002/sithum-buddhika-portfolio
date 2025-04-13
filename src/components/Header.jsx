import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center z-50 bg-zinc-900/80 backdrop-blur-md">
      <div className="container flex justify-between items-center">
        <h1>
          <a href="/" className="logo flex items-center gap-2">
            <img
              src="/images/logo.svg"
              width={36}
              height={36}
              alt="Sithum Buddhika"
              className="hover:scale-110 transition-transform duration-300"
            />
            <span className="text-zinc-100 font-semibold text-lg hidden md:block">
              Sithum
            </span>
          </a>
        </h1>

        <div className="relative">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-rounded text-2xl">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-primary hidden md:flex"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;