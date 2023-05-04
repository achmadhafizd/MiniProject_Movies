import * as React from "react";
import { useParams } from "react-router-dom";
import { gql, useSubscription } from "@apollo/client";
import { Comments } from "../../components/molecules";
import { InputFormComment } from "../../components/organism";
import { useSignInSelector } from "../../config/redux/Auth/authSelector";
import ButtonKomen from "../../components/atoms/Button/ButtonKomen.atom";
import { useMoviesDetailSelector } from "../../config/redux/MoviesDetails/moviesDetailSelector";

function DetailPage() {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const movieDetail = useMoviesDetailSelector();
  console.log("moviedetail", movieDetail);
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;
  const LoggedIn = useSignInSelector();

  const subsKomentarS = gql`
    subscription Subs_KomentarS($_eq: Int!) {
      Comments(where: { movie_id: { _eq: $_eq } }) {
        komentar
        user_id
        Comments_To_User {
          fullName
        }
      }
    }
  `;

  const { data: SubsDataKomen } = useSubscription(subsKomentarS, {
    variables: {
      _eq: movieId,
    },
  });

  return (
    <div className="bg-green-800 dark:bg-indigo-950">
      <div>
        <div className="grid grid-cols-5 gap-4 mx-10 py-10">
          <div>
            <img
              src={`${baseImgUrl}/${movieDetail.poster_path}`}
              alt="apapun"
              className="bg-emerald-700 border border-emerald-700 rounded-lg col-span-1 dark:bg-indigo-800 dark:border-indigo-800"
            />

            <div className="mt-3">
              {LoggedIn ? (
                <InputFormComment movieId={movieId} />
              ) : (
                <div className="ms-5">
                  <ButtonKomen />
                </div>
              )}
            </div>
          </div>

          <div className="col-span-2 ps-10">
            <h1 className="font-bold text-2xl text-lime-100 mb-14 dark:text-white">
              {movieDetail.title}
            </h1>
            <p className="text-lime-100 mb-14 dark:text-white">
              {movieDetail.overview}
            </p>
            <div className="text-lime-300 dark:text-pink-400">
              <p className="mb-5">
                Rating :
                <span className="text-lime-100 dark:text-white">
                  {" "}
                  {movieDetail.vote_average}{" "}
                </span>
              </p>
              <p className="text-lime-300 mb-5 dark:text-pink-400">
                Release Date :{" "}
                <span className="text-lime-100 dark:text-white">
                  {movieDetail.release_date}{" "}
                </span>
              </p>
              <p className="text-lime-300 dark:text-pink-400">
                Vote :{" "}
                <span className="text-lime-100 dark:text-white">
                  {movieDetail.vote_count}{" "}
                </span>{" "}
                Reviews
              </p>
            </div>
          </div>

          <div className="col-span-2 text-lime-100">
            {SubsDataKomen?.Comments.map((komen) => {
              const user = komen.Comments_To_User;
              return (
                <Comments isiKomen={komen.komentar} fullName={user.fullName} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
