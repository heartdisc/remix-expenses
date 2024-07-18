import MainHeader from "~/components/navigation/MainHeader";
import { Outlet } from "@remix-run/react";
import pageStyles from "~/styles/marketing.css";

export default function AppLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: pageStyles }];
}
