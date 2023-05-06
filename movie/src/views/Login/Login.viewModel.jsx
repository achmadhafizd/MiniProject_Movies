import { useQuery } from "@apollo/client";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import authSlice from "../../config/redux/Auth/authSlice";
import {
  useLoginInvalid,
  useLoginSuccess,
} from "../../config/Toastify/Toastify";
import { RETRIEVE_SIGNUP } from "../../config/GraphQL/Auth/Auth";

function LoginViewModel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: RetrieveDataSignUp } = useQuery(RETRIEVE_SIGNUP);

  const ValSignIn = Yup.object().shape({
    emailLogin: Yup.string()
      .email()
      .required("Email is required")
      .label("Email"),
    passwordLogin: Yup.string()
      .required("Password is required")
      .label("Password"),
  });

  const formik = useFormik({
    initialValues: {
      emailLogin: "",
      passwordLogin: "",
    },
    validationSchema: ValSignIn,
    onSubmit: (values) => {
      const validationLogin = RetrieveDataSignUp?.Users.find(
        (user) =>
          user.emailSignUp === values.emailLogin &&
          user.passwordSignUp === values.passwordLogin
      );

      if (validationLogin) {
        dispatch(authSlice.actions.loginUser(validationLogin));
        dispatch(authSlice.actions.setSignIn(true));
        useLoginSuccess();
        navigate("/");
      } else {
        useLoginInvalid();
      }
      formik.resetForm();
    },
  });

  return { dispatch, navigate, RetrieveDataSignUp, formik };
}

export default LoginViewModel;
