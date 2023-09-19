"use client";

import { BsSearch, BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { motion } from "framer-motion";
import { Input } from "../ui/input";
import Cart from "./Cart";
import Favorites from "./Favorites";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import Categories from "./Categories";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  let timer: NodeJS.Timeout;
  const search = (event: any) => {
    const value = event.target.value;
    if (value.length > 1) {
      timer = setTimeout(() => {}, 200);
    }
  };

  const changeTheme = (e: string) => {
    setTheme(e);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[128px]"></div>;
  }

  return (
    <motion.nav
      className="py-4 flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={
              theme === "dark"
                ? "/images/logo-dark.png"
                : "/images/logo-light.png"
            }
            alt="Logo"
            width={90}
            height={24}
            quality={100}
          />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="h-9 px-4 py-2 bg-secondary text-secondary-foreground 
          shadow-sm w-[400px] rounded-md text-xs text-start flex items-center gap-2"
          >
            <BsSearch />
            Search For Restaurants
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[400px]">
            <DropdownMenuLabel>Enter item name</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Input
              onChange={(e) => search(e)}
              onKeyDown={() => clearTimeout(timer)}
              placeholder="Ex. KFC"
              className="mb-2"
            />
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center gap-4">
          {theme === "dark" && (
            <BsFillSunFill
              onClick={() => changeTheme("light")}
              className="cursor-pointer"
              size={24}
            />
          )}
          {theme === "light" && (
            <BsMoonFill
              onClick={() => changeTheme("dark")}
              className="cursor-pointer"
              size={24}
            />
          )}
          {loggedIn && <Favorites />}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FiLogIn size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Cart />
        </div>
      </div>
      <Categories theme={theme} />
    </motion.nav>
  );
};

export default Header;
