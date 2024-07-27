import React, { useState } from "react";
import data from "../portfolioData.json";

const Header = () => {
  return (
    <header>
      {/* <!-- Logo --> */}
      <nav class="navbar text-shadow relative bg-base-100 ring-1 ring-base-300 shadow-md w-full flex transition ease-linear">
        <div class="navbar-start">
          <btn class=" text-shadow-sm  font-medium text-lg">{data.name}</btn>
        </div>

        {/* <!-- Mobile Nav --> */}
        <div class="navbar-end">
          <div class="dropdown dropdown-end lg:hidden">
            <label tabindex="0" class="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm text-shadow-sm mt-3 dropdown-content ring-1 ring-base-300  z-20 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- DesktopNav --> */}
        <div class="navbar-center hidden lg:flex lg:items-center">
          <ul class="menu menu-horizontal px-1 space-x-5">
            <li>
              <a class="text-lg font-medium " href="#about">
                About
              </a>
            </li>
            <li>
              <a class="text-lg font-medium " href="#education">
                Education
              </a>
            </li>
            <li>
              <a class="text-lg font-medium " href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a class="text-lg font-medium " href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
