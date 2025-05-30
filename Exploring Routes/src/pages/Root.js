import { Outlet } from "react-router-dom";
import { MainNavigation } from "../Components/MainNavigation";

export function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
