import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navibar } from "../../organism";

function LandingPageTemplate() {
  return (
    <div>
      <Navibar />
      <div className="bg-lime-50 dark:bg-indigo-950">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageTemplate;
