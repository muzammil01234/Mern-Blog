import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  return (
    <>
      <Navbar className="border-b-2 ">
        <Link
          to="/"
          className="whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Muzzu's
          </span>
          Blog
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Enter text to Search"
            rightIcon={AiOutlineSearch}
            className=" hidden lg:inline"
          ></TextInput>
        </form>
        <Button className="w-12 h-10 bg-gray-500 rounded-2xl lg:hidden" pill>
          <AiOutlineSearch />
        </Button>
        <div className="flex  gap-2 md:order-2">
          <Button className="w-12 h-10 " color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" className=" text-xl">
              SignIn
            </Button>
          </Link>
        </div>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Navbar.Link active={location.pathname == "/"}>
            <Link className=" text-xl" to="/">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={location.pathname == "/about"}>
            <Link to="/about" className=" text-xl">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={location.pathname == "/project"}>
            <Link to="/project" className=" text-xl">
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
