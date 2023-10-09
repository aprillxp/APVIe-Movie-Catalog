import { useEffect, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { asyncCreateMovie } from "../store/actions/movieAction";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [movieState, setMovieState] = useState({
    title: "",
    slug: "",
    synopsis: "",
    genre: "Horror",
    trailerUrl: "",
    imgUrl: "",
    rating: 0,
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    const newMovieInput = {
      ...movieState,
    };
    newMovieInput[name] = value;
    setMovieState(newMovieInput).then((data) => {
      navigate("/");
    })
    .catch(error => console.log(error))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(asyncCreateMovie(movieState));
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center w-full bg-black">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="white">
            Add Movie to your list
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Fill the form.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={submitHandler}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Title"
                value={movieState.title}
                onChange={changeHandler}
                name="title"
              />
              <Input
                size="lg"
                label="Slug"
                value={movieState.slug}
                onChange={changeHandler}
                name="slug"
              />
              <Input
                size="lg"
                label="Synopsis"
                value={movieState.synopsis}
                onChange={changeHandler}
                name="synopsis"
              />
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="btn m-1"
                  value={movieState.genre}
                  onChange={changeHandler}
                  name="genre"
                >
                  Genre
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Horror</a>
                  </li>
                  <li>
                    <a>Sci-fi</a>
                  </li>
                  <li>
                    <a>Comedy</a>
                  </li>
                  <li>
                    <a>Action</a>
                  </li>
                  <li>
                    <a>Family</a>
                  </li>
                </ul>
              </div>
              <Input
                size="lg"
                label="TrailerUrl"
                value={movieState.trailerUrl}
                onChange={changeHandler}
                name="trailerUrl"
              />
              <Input
                size="lg"
                label="ImageUrl"
                value={movieState.imgUrl}
                onChange={changeHandler}
                name="imgUrl"
              />
              <Input
                size="lg"
                label="Rating"
                value={movieState.rating}
                onChange={changeHandler}
                name="rating"
              />
            </div>
            <Button
              className="mt-10 bg-yellow-500 hover:bg-yellow-700 text-black"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}
