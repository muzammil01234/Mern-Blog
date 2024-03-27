import React from "react";
import { Button, Navbar, TextInput, Dropdown, Avatar } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
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
          <Button
            className="w-12 h-10 "
            color="gray"
            onClick={() => {
              dispatch(toggleTheme());
              console.log("clicked");
            }}
            pill
          >
            <FaMoon />
          </Button>
          {currentUser ? (
            <Dropdown
              label={
                <Avatar
                  alt="User settings"
                  img={currentUser.profilePhoto}
                  rounded
                />
              }
              arrowIcon={false}
              inline
            >
              <Dropdown.Header>
                <span className="block text-sm">{currentUser.username}</span>
                <span className="block truncate text-sm font-medium">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/signin">
              <Button gradientDuoTone="purpleToBlue" className=" text-xl">
                SignIn
              </Button>
            </Link>
          )}
        </div>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Navbar.Link active={location.pathname == "/"} as="div">
            <Link className=" text-xl" to="/">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={location.pathname == "/about"} as="div">
            <Link to="/about" className=" text-xl">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={location.pathname == "/project"} as="div">
            <Link to="/project" className=" text-xl">
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
