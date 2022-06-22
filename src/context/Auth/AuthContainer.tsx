import React, { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import { AuthStateInterface } from "./AuthInterface";
import { TOKEN } from "../../constants";
import LocalStorage from "../../services/LocalStorage";

type Props = {
  children?: React.ReactNode;
};

const AuthContextContainer: React.FC<Props> = ({ children }) => {
  const defaultAuthState: AuthStateInterface = {
    isAuthenticated: false,
    token: "",
  };
  const [state, setState] = useState<AuthStateInterface>(defaultAuthState);
  const authenticateUser: (token: string) => void = (token: string): void => {
    LocalStorage.SetItem(TOKEN, token);

    setState((prev) => {
      return {
        ...prev,
        isAuthenticated: true,
        token: token,
      };
    });
  };

  const logoutUser: () => void = (): void => {
    LocalStorage.RemoveItem(TOKEN);

    setState((prev) => {
      return {
        ...prev,
        isAuthenticated: false,
      };
    });
  };
  const checkAuthentication: () => boolean = (): boolean => {
    return !!LocalStorage.GetItem(TOKEN);
    // return true;
  };
  return (
    <AuthProvider
      value={{
        isAuthenticated: state.isAuthenticated,
        authenticateUser,
        logoutUser,
        checkAuthentication,
      }}
    >
      {children}
    </AuthProvider>
  );
};
export default AuthContextContainer;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
