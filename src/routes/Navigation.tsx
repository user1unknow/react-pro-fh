import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Cargando</h1>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active">
                    {name}
                  </NavLink>
                </li>
              ))}

              {/*<li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>
                Lazy1
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>
                Lazy2
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>
                Lazy3
              </NavLink>
            </li>*/}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} render={() => <Component />} />
              /*<Route key={path} path={path}>
              {Component}
            </Route>*/
            ))}

            {/*<Route path="/lazy1">
            <LazyPage1 />
          </Route>
          <Route path="/lazy2">
            <LazyPage2 />
          </Route>
          <Route path="/lazy3">
            <LazyPage3 />
          </Route> */}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
