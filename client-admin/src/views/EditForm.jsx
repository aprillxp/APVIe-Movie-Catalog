import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { asyncEditMovies } from "../store/actions/actionCreator";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const BASE_URL = "http://localhost:3000";

export default function EditFrom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId } = useParams();

  const movies = useSelector((state) => state.movies);
  const movieEdit = movies.find((movie) => movie.id === Number(movieId));

  const [movieState, setMovieState] = useState({
    title: movieEdit.title,
    slug: movieEdit.slug,
    synopsis: movieEdit.synopsis,
    genre: movieEdit.genre,
    trailerUrl: movieEdit.trailerUrl,
    imgUrl: movieEdit.slug,
    rating: movieEdit.rating,
  });

  const changeInput = () => {
    const { value, name } = e.target;
    const newMovieInput = {
      ...movieState,
    };
    newMovieInput[name] = value;
    setMovieState(newMovieInput).then((data) => {
      navigate("/");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncEditMovies(movieId, movieState, navigate));
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
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Title" onChange={changeInput} />
              <Input size="lg" label="Slug" onChange={changeInput} />
              <Input size="lg" label="Synopsis" onChange={changeInput} />
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1" onChange={changeInput}>
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
              <Input size="lg" label="TrailerUrl" onChange={changeInput} />
              <Input size="lg" label="ImageUrl" onChange={changeInput} />
              <Input size="lg" label="Rating" onChange={changeInput} />
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
