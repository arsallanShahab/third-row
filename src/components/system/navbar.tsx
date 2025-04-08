import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import FlexContainer from "./flex-container";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[var(--zinc)]">
      <FlexContainer
        variant="row-between"
        alignItems="center"
        className="px-5 md:px-10 lg:px-15 py-5"
      >
        {" "}
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-auto w-full object-contain"
          />
        </Link>
        <FlexContainer alignItems="center" gap="7xl" className="hidden md:flex">
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="sm:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <FlexContainer variant="column-start" gap="lg" className="p-8">
              <Link to="/" className="nav-link pl-[0_!important]">
                Home
              </Link>
              <Link to="/all-events" className="nav-link pl-[0_!important]">
                All Events
              </Link>
              <Link to="/resell-tickets" className="nav-link pl-[0_!important]">
                Resell Tickets
              </Link>
              <button className="btn-outlined">LOGIN/REGISTER</button>
            </FlexContainer>
          </SheetContent>
        </Sheet>
      </FlexContainer>
    </div>
  );
};

export default Navbar;
