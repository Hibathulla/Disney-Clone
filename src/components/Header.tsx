import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./Header/ThemeToggler";
import SearchInput from "./Header/SearchInput";
import GenreDropdown from "./GenreDropdown";

const Header = () => {
  return (
    <header className="sticky w-full z-20 items-center justify-between p-5 flex bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        {/*SerachInput*/}
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
