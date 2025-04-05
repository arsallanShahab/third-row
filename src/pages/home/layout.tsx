import Footer from "@/components/system/footer";
import Navbar from "@/components/system/navbar";
import { Fragment } from "react";
import { Outlet } from "react-router";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
