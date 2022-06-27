import NaviBar from "../NaviBar/NaviBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";

const Layout = () => {
  return (
    <div>
      <NaviBar />
      <Suspense
        fallback={<ThreeDots color="#2196f3" height={"50vh"} width={80} />}
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
