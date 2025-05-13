import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { data } from "../../lib/constants/navbar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
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
          <Dialog>
            <DialogTrigger>
              <button className="btn-outlined cursor-pointer">
                LOGIN/REGISTER
              </button>
            </DialogTrigger>
            <DialogContent>
              <Tabs defaultValue="signup">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="signup" className="cursor-pointer">
                    Signup
                  </TabsTrigger>
                  <TabsTrigger value="login" className="cursor-pointer">
                    Login
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                  <Card className="border-none px-0 shadow-none">
                    <CardHeader className="px-0">
                      <CardTitle>Signup</CardTitle>
                      <CardDescription>
                        Create an account to start using our services.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 px-0">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Pedro Duarte" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="abc@gmail.com"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="********"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="px-0">
                      <Button className="w-full">Create Account</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="login">
                  <Card className="border-none shadow-none">
                    <CardHeader className="px-0">
                      <CardTitle>Login</CardTitle>
                      <CardDescription>
                        Login to your account to access our services.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 px-0">
                      <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="abc@gmail.com"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="********"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="px-0">
                      <Button className="w-full">Login to your account</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
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
              <Dialog>
                <DialogTrigger>
                  <button className="btn-outlined cursor-pointer w-full">
                    LOGIN/REGISTER
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <Tabs defaultValue="signup">
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger value="signup" className="cursor-pointer">
                        Signup
                      </TabsTrigger>
                      <TabsTrigger value="login" className="cursor-pointer">
                        Login
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="signup">
                      <Card className="border-none px-0 shadow-none">
                        <CardHeader className="px-0">
                          <CardTitle>Signup</CardTitle>
                          <CardDescription>
                            Create an account to start using our services.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 px-0">
                          <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Pedro Duarte" />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="abc@gmail.com"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              id="password"
                              type="password"
                              placeholder="********"
                            />
                          </div>
                        </CardContent>
                        <CardFooter className="px-0">
                          <Button className="w-full">Create Account</Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                    <TabsContent value="login">
                      <Card className="border-none shadow-none">
                        <CardHeader className="px-0">
                          <CardTitle>Login</CardTitle>
                          <CardDescription>
                            Login to your account to access our services.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 px-0">
                          <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="abc@gmail.com"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              id="password"
                              type="password"
                              placeholder="********"
                            />
                          </div>
                        </CardContent>
                        <CardFooter className="px-0">
                          <Button className="w-full">
                            Login to your account
                          </Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </FlexContainer>
          </SheetContent>
        </Sheet>
      </FlexContainer>
    </div>
  );
};

export default Navbar;
