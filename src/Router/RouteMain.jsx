import { Route, Switch } from "react-router-dom";
import { Home } from "../Components/Home";
import { Projects } from "../Components/Projects";

export function RouteMain() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">Contact Page</Route>
        <Route path="/about-me">About Page</Route>
        <Route>
          <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
