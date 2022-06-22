import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "../../context/Auth/AuthContainer";
import { LOGIN_ROUTE } from "../RoutesConstants";
import { IRoutes } from "../RoutesMetaData";
export interface IPrivateRoute {
  component: React.FC;
  exact?: boolean;
  path: string;
}
const PrivateRoute: React.FC<IRoutes> = ({ component, exact, path }) => {
  const { checkAuthentication } = useAuthContext();
  return (
    <React.Fragment>
      {checkAuthentication() ? (
        <Route exact={exact} path={path} component={component} />
      ) : (
        <Redirect to={LOGIN_ROUTE} />
      )}
    </React.Fragment>
  );
};

export default PrivateRoute;
