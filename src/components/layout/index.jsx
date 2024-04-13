import Navbar, { MobileNav } from "../navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="w-screen h-screen flex p-0 max-[999px]:flex-col">
      {/* Navbar */}
      <div className="max-[999px]:hidden">
        <Navbar />
      </div>
      {/* Mobile nav */}
      <div className="min-[999px]:hidden">
        <MobileNav />
      </div>
      {/* Outlet Structure */}
      <div className="flex-1 max-[999px]:rounded-none flex-col  overflow-y-scroll overflow-hidden">
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default Layout;
