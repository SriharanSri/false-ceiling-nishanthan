import React from "react";
import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import MobileMenu from "./header/MobileMenu";
import ContactButton from "./header/ContactButton";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Logo />
            <Navigation />
          </div>

          <div className="flex items-center gap-4">
            <ContactButton />
            {/* <MobileMenu /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
