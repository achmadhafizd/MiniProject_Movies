import { useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useSubscription, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  useSignInSelector,
  useUserSelector,
} from "../../config/redux/Auth/authSelector";
import { useMoviesDetailSelector } from "../../config/redux/MoviesDetails/moviesDetailSelector";
import {
  deleteKomentarS,
  insertKomentarS,
  subsKomentarS,
  updateKomentarS,
} from "../../config/GraphQL/Comments/CRUD_Comments";
import { useGenreMovieSelector } from "../../config/redux/movies/moviesSelector";
import {
  useAddSuccess,
  useDeleteSuccess,
  useEditSuccess,
} from "../../config/Toastify/Toastify";
import CommentSlice from "../../config/redux/Comments/komenSlice";
import { useIsEdit } from "../../config/redux/Comments/komenSelector";
import { RetrieveGenreMovie } from "../../config/redux/movies/moviesThunk";

function DetailPageViewModel() {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movieDetail = useMoviesDetailSelector();
  const dispatch = useDispatch();
  const LoggedIn = useSignInSelector();
  const user = useUserSelector();
  const isEdit = useIsEdit();
  const movieGenre = useGenreMovieSelector();
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;
  useEffect(() => {
    dispatch(RetrieveGenreMovie());
  }, []);

  const [insertKomen] = useMutation(insertKomentarS);
  const [deleteKomen] = useMutation(deleteKomentarS);
  const [updateKomen] = useMutation(updateKomentarS);
  const { data: SubsDataKomen } = useSubscription(subsKomentarS, {
    variables: {
      _eq: movieId,
    },
  });

  const ValComment = Yup.object().shape({
    IsiKomen: Yup.string()
      .required("Comment is required")
      .label("Comment")
      .max(100, "Comments to long"),
  });

  const formik = useFormik({
    initialValues: {
      IsiKomen: "",
      user_id: user.id,
      movie_id: movieId,
      comment_id: "",
    },
    validationSchema: ValComment,
    onSubmit: (values) => {
      if (isEdit === true) {
        updateKomen({
          variables: {
            komentar: values.IsiKomen,
            comment_id: values.comment_id,
          },
        });
        useEditSuccess();
        dispatch(CommentSlice.actions.setisEdit(false));
        formik.resetForm();
      } else {
        insertKomen({
          variables: {
            komentar: values.IsiKomen,
            movie_id: values.movie_id,
            user_id: values.user_id,
          },
        });
        useAddSuccess();
        formik.resetForm();
      }
    },
  });

  const handleDelete = useCallback((commentId) => {
    deleteKomen({
      variables: {
        comment_id: commentId,
      },
    });
    useDeleteSuccess();
  });

  const handleEdit = useCallback((data) => {
    dispatch(CommentSlice.actions.setisEdit(true));
    formik.setValues({
      IsiKomen: data.komentar,
      user_id: data.user_id,
      comment_id: data.comment_id,
    });
  });

  return {
    dispatch,
    movieDetail,
    baseImgUrl,
    LoggedIn,
    SubsDataKomen,
    movieGenre,
    formik,
    handleDelete,
    handleEdit,
    user,
    isEdit,
  };
}

export default DetailPageViewModel;
