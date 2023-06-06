import { UserContext } from "contexts/UserContext";
import { useContext, useEffect } from "react";
import type { State } from "types/state";

type ProtectedRouteProps = {
  children: JSX.Element;
};

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps): JSX.Element => {
  const userStore: State.User = useContext(UserContext);

  useEffect(() => {
    userStore.verifyAuth();
  }, []);

  return <>{children}</>;
};
