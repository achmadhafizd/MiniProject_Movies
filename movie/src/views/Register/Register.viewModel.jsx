import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import {
  useRegisterFailed,
  useRegisterSuccess,
} from "../../config/Toastify/Toastify";
import { INSERT_USER, RETRIEVE_SIGNUP } from "../../config/GraphQL/Auth/Auth";

function RegisterViewModel() {
  const navigate = useNavigate();

  const [insertUsers] = useMutation(INSERT_USER);
  const { data: RetrieveDataSignUp } = useQuery(RETRIEVE_SIGNUP);

  const ValSignUp = Yup.object().shape({
    emailSignUp: Yup.string()
      .email("Invalid email address")
      .required("E-mail is required"),
    fullName: Yup.string()
      .min(3)
      .max(40)
      .required("Full name is required")
      .label("Full Name"),
    passwordSignUp: Yup.string()
      .required("Password is required")
      .label("Password"),
    repeatPasswordSignUp: Yup.string()
      .oneOf([Yup.ref("passwordSignUp"), null], "Password must match")
      .required("Repeat Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      emailSignUp: "",
      fullName: "",
      passwordSignUp: "",
      repeatPasswordSignUp: "",
    },
    validationSchema: ValSignUp,

    onSubmit: (values) => {
      const validationLogin = RetrieveDataSignUp?.Users.find(
        (user) =>
          user.emailSignUp === values.emailLogin &&
          user.fullName === values.fullName
      );
      if (validationLogin === true) {
        useRegisterFailed();
      } else {
        insertUsers({
          variables: {
            emailSignUp: values.emailSignUp,
            fullName: values.fullName,
            passwordSignUp: values.passwordSignUp,
            repeatPasswordSignUp: values.repeatPasswordSignUp,
          },
        });
        useRegisterSuccess();
      }

      formik.resetForm();
    },
  });

  return { navigate, insertUsers, RetrieveDataSignUp, formik };
}

export default RegisterViewModel;
