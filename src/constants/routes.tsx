import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

type Routes = {
  [key: string]: {
    path: string;
    page: JSX.Element;
    isProtected: boolean;
  };
};

export const ROUTES: Routes = {
  HOME: { path: "/", page: <Home />, isProtected: false },
  BROWSE: { path: "/browse", page: <></>, isProtected: true },
  SIGNUP: { path: "/sign-up", page: <></>, isProtected: false },
  SIGNIN: { path: "/sign-in", page: <SignIn />, isProtected: false },
};
