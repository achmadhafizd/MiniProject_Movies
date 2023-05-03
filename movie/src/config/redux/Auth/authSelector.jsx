import { useSelector } from "react-redux";

export const useUserSelector = () => useSelector((state) => state.auth.user);

export const useSignInSelector = () =>
  useSelector((state) => state.auth.isSignIn);
