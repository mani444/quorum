import React from "react";
import {
  CHAT_SCREEN_ROUTE,
  CREATE_EVENT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
} from "./RoutesConstants";

const Login = React.lazy(() => import("../containers/SignIn/SignIn"));
const Home = React.lazy(() => import("../containers/Home/Home"));
const CreateEvent = React.lazy(
  () => import("../containers/CreateEvent/CreateEvent")
);
const ChatScreen = React.lazy(
  () => import("../containers/ChatScreen/ChatScreen")
);

export interface IRoutes {
  path: string;
  component: any; //this component should be from containers
  exact?: boolean;
  isPrivate?: boolean;
}

export const allRoutes: IRoutes[] = [
  {
    path: HOME_ROUTE,
    component: Home,
    exact: true,
    // isPrivate: true,
    isPrivate: true,
  },

  {
    path: CREATE_EVENT_ROUTE,
    component: CreateEvent,
    exact: true,
    isPrivate: true,
  },
  {
    path: CHAT_SCREEN_ROUTE,
    component: ChatScreen,
    exact: true,
    isPrivate: true,
  },
  {
    path: LOGIN_ROUTE,
    component: Login,
    exact: true,
    isPrivate: false,
  },
];
