import { RouteMain } from "../Router/RouteMain";
import { Navbar } from "./Navbar";

export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <RouteMain />
    </div>
  );
};
