import React from "react";
import { Link } from "react-router";
import FlexContainer from "./flex-container";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[var(--zinc)]">
      <FlexContainer
        variant="row-between"
        alignItems="center"
        className="px-10 py-5"
      >
        {" "}
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-auto w-full object-contain"
          />
        </Link>
        <FlexContainer alignItems="center" gap="7xl">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/all-events" className="nav-link">
            All Events
          </Link>
          <Link to="/resell-tickets" className="nav-link">
            Resell Tickets
          </Link>
          <button className="btn-outlined">LOGIN/REGISTER</button>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};

export default Navbar;
