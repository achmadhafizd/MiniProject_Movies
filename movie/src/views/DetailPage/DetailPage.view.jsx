import * as React from "react";
import ButtonKomen from "../../components/atoms/Button/ButtonKomen.atom";
import { Comments, InputFormComment } from "../../components/organism";
import DetailPageViewModel from "./DetailPage.viewModel";

function DetailPage() {
  const viewModel = DetailPageViewModel();
  return (
    <div className="bg-green-800 dark:bg-indigo-950">
      <div>
        <div className="grid grid-cols-5 gap-4 mx-10 py-10">
          <div>
            <img
              src={`${viewModel.baseImgUrl}/${viewModel.movieDetail.poster_path}`}
              alt="apapun"
              className="bg-emerald-700 border border-emerald-700 rounded-lg col-span-1 dark:bg-indigo-800 dark:border-indigo-800"
            />

            <div className="mt-3">
              {viewModel.LoggedIn ? (
                <InputFormComment
                  formik={viewModel.formik}
                  isEdit={viewModel.isEdit}
                />
              ) : (
                <div className="ms-5">
                  <ButtonKomen />
                </div>
              )}
            </div>
          </div>

          <div className="col-span-2 ps-10">
            <h1 className="font-bold text-2xl text-lime-100 mb-14 dark:text-white">
              {viewModel.movieDetail.title}
            </h1>
            <p className="text-lime-100 mb-14 dark:text-white">
              {viewModel.movieDetail.overview}
            </p>
            <div className="text-lime-300 dark:text-pink-400">
              <p className="mb-5">
                Genre :
                {viewModel.movieDetail.genre_ids.map((genre) => {
                  const findGenre = viewModel.movieGenre.genres.find(
                    (listofGenre) => genre === listofGenre.id
                  );
                  return (
                    <span className="text-lime-100 dark:text-white mx-1">
                      {findGenre.name}
                    </span>
                  );
                })}
              </p>
              <p className="text-lime-300 mb-5 dark:text-pink-400">
                Release Date :{" "}
                <span className="text-lime-100 dark:text-white">
                  {viewModel.movieDetail.release_date}{" "}
                </span>
              </p>
              <p className="mb-5">
                Rating :
                <span className="text-lime-100 dark:text-white">
                  {" "}
                  {viewModel.movieDetail.vote_average}{" "}
                </span>
              </p>
              <p className="text-lime-300 dark:text-pink-400">
                Vote :{" "}
                <span className="text-lime-100 dark:text-white">
                  {viewModel.movieDetail.vote_count}{" "}
                </span>{" "}
                Reviews
              </p>
            </div>
          </div>

          <div
            className="col-span-2 text-lime-100 overflow-y-scroll"
            style={{ maxHeight: "530px" }}
          >
            {viewModel.SubsDataKomen?.Comments.map((komen) => {
              const komenUser = komen.Comments_To_User;
              return (
                <Comments
                  key={komen.comment_id}
                  isiKomen={komen.komentar}
                  fullName={komenUser.fullName}
                  userId={komen.user_id}
                  commentsId={komen.comment_id}
                  handleDelete={viewModel.handleDelete}
                  handleEdit={viewModel.handleEdit}
                  user={viewModel.user}
                  komen={komen}
                  LoggedIn={viewModel.LoggedIn}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
