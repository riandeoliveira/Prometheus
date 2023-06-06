import { useEffect } from "react";
// import { useUserStore } from "store/useUserStore";
// import type { State } from "types/state";

type ProtectedRouteProps = {
  children: JSX.Element;
};

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps): JSX.Element => {
  // const userStore: State.User = useUserStore();

  useEffect(() => {
    // userStore.verifyAuth();
  }, []);

  return <>{children}</>;
};
