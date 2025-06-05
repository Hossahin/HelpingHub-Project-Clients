import React from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinners from "../components/LoadingSpinners";

const Root = () => {
  const { state } = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </header>

      <main className="flex-1">
        <div className="w-11/12 mx-auto my-10">
          {state === "loading" ? <LoadingSpinners /> : <Outlet></Outlet>}
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
