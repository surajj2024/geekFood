import { Outlet } from "react-router-dom";
import FooterSection from "./FooterSection";

import NavBar from "./NavBar";

export default function LayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
      <FooterSection />
    </>
  );
}
