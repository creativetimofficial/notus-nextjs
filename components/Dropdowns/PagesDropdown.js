import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return <>
    <a
      className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      href="#pablo"
      ref={btnDropdownRef}
      onClick={(e) => {
        e.preventDefault();
        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
      }}
    >
      Demo Pages
    </a>
    <div
      ref={popoverDropdownRef}
      className={
        (dropdownPopoverShow ? "block " : "hidden ") +
        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      }
    >
      <span
        className={
          "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        }
      >
        Admin Layout
      </span>
      <Link
        href="/admin/dashboard"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }>
        
          Dashboard
        
      </Link>
      <Link
        href="/admin/settings"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }>
        
          Settings
        
      </Link>
      <Link
        href="/admin/tables"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }>
        
          Tables
        
      </Link>
      <Link
        href="/admin/maps"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }>
        
          Maps
        
      </Link>
      <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        className={
          "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        }
      >
        Auth Layout
      </span>
      <Link
        href="/auth/login"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }>
        
          Login
        
      </Link>
      <Link
        href="/auth/register"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }>
        
          Register
        
      </Link>
      <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        className={
          "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        }
      >
        No Layout
      </span>
      <Link
        href="/landing"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }>
        
          Landing
        
      </Link>
      <Link
        href="/profile"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }>
        
          Profile
        
      </Link>
    </div>
  </>;
};

export default PagesDropdown;
