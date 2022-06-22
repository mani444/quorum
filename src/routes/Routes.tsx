import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { CircularSpinner } from "../components/Spinner/Spinner";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { allRoutes } from "./RoutesMetaData";

const Routes: React.FC<{}> = () => {
  return (
    <Suspense
      fallback={<CircularSpinner backdropAlpha={false}></CircularSpinner>}
    >
      <Switch>
        {allRoutes.map((currentRoute, index) => {
          return currentRoute.isPrivate ? (
            <PrivateRoute
              key={index}
              component={currentRoute.component}
              exact={currentRoute.exact}
              path={currentRoute.path}
            />
          ) : (
            <Route
              key={index}
              path={currentRoute.path}
              component={currentRoute.component}
              exact={currentRoute.exact || false}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default Routes;
