import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { data } from "../../lib/constants/navbar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import FlexContainer from "./flex-container";

type Props = {};

const Navbar = (props: Props) => {
  const [activeSubcategory, setActiveSubcategory] = React.useState<
    string | null
  >(null);
  const dropdownRef = React.useRef<HTMLAnchorElement | null>(null);
  const categoryRef = React.useRef<HTMLDivElement | null>(null);

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
          {/* <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/all-events" className="nav-link">
            All Events
          </Link>
          <Link to="/resell-tickets" className="nav-link">
            Resell Tickets
          </Link> */}
          {data.map((item, index) => (
            <Link
              to={`/${item.category.toLowerCase()}`}
              key={index}
              ref={dropdownRef}
              className="nav-link dropdown"
              onMouseEnter={() =>
                setActiveSubcategory(item.subcategories[0].name)
              }
              onMouseLeave={(e) => {
                // Only set to null if we're completely leaving the dropdown
                // and not just moving to another part of it
                const relatedTarget = e.relatedTarget as Node;
                if (
                  !dropdownRef.current ||
                  !dropdownRef.current.contains(relatedTarget)
                ) {
                  setActiveSubcategory(null);
                }
              }}
            >
              {item.category}{" "}
              <div
                className="dropdown-content"
                onMouseEnter={() => {
                  // Ensure we maintain activeSubcategory when mouse enters dropdown-content
                  if (!activeSubcategory && item.subcategories.length > 0) {
                    setActiveSubcategory(item.subcategories[0].name);
                  }
                }}
              >
                <div className="dropdown-subcategories">
                  {" "}
                  {item.subcategories.map((subcategory, subIndex) => (
                    <div
                      key={subIndex}
                      ref={categoryRef}
                      onMouseEnter={() =>
                        setActiveSubcategory(subcategory.name)
                      }
                      // No onMouseLeave handler needed for individual subcategories
                      className={`dropdown-subcategory ${
                        activeSubcategory === subcategory.name ? "active" : ""
                      }`}
                    >
                      <h3>{subcategory.name}</h3>
                    </div>
                  ))}
                </div>
                <div className="dropdown-events">
                  {item.subcategories
                    .filter(
                      (subcategory) => subcategory.name === activeSubcategory
                    )
                    .flatMap((subcategory) => subcategory.events)
                    .map((event, eventIndex) => (
                      <Link
                        to={`/${event.toLowerCase()}`}
                        key={eventIndex}
                        className="dropdown-event"
                      >
                        {event}
                      </Link>
                    ))}
                </div>
              </div>
            </Link>
          ))}
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
