import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const ToastifyContainer = () => {
  <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />;
};

// #region Login
export const useLoginInvalid = () =>
  toast("Incorrect email or password", {
    type: "error",
  });

export const useLoginSuccess = () =>
  toast("Logged in successfully", {
    type: "success",
  });
// #endregion

// #region REGISTER
export const useRegisterSuccess = () => {
  toast("Successfully created an account", {
    type: "success",
  });
};

export const useRegisterFailed = () => {
  toast("Account already exists", {
    type: "error",
  });
};
// #endregion

// #region LogOut
export const useLogOutSuccess = () => {
  toast("Logged out successfully", {
    type: "success",
  });
};
// #endregion

// #region Comment
export const useDeleteSuccess = () => {
  toast("Success deleted comment", {
    type: "success",
  });
};

export const useAddSuccess = () => {
  toast("Success added a comment", {
    type: "success",
  });
};
export const useEditSuccess = () => {
  toast("Success Edited comment", {
    type: "success",
  });
};
// #endregion
