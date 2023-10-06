import { useEffect, useState } from "react";
import background from "../assets/background-movie.png";
import maryjane from "../assets/background-movie-2.png";
import MovieCard from "../components/Card";

const BASE_URL = "http://localhost:3000";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setMovieState] = useState({
    title: "",
    slug: "",
    synopsis: "xixixi",
    trailerUrl: "",
    imgUrl: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    rating: 0,
  });

  const fetchMovies = () => {
    fetch(BASE_URL + "/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies, "< movies");

  const changeInput = (event) => {
    const { target } = event;
    const { value, name: inputName } = target;

    setMovieState({
      ...movieState,
      [inputName]: value,
    });
  };

  const onSubmitMovie = (event) => {
    event.preventDefault();
    fetch(BASE_URL + "/movies", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieState),
    })
      .then((res) => {
        if (res.ok) {
          fetchMovies();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container w-[75%] m-auto">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={background} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={maryjane} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center mt-6">
          <div className="justify-self-start">
            <h1 className="text-xl font-bold font-sans">Movie to watch</h1>
          </div>
        </div>

        {
          // card section
          <section className="grid grid-cols-4 mt-7 gap-7">
            {movies.map((movie, i) => {
              return <MovieCard key={i} item={movie} />;
            })}
          </section>
          // end card section
        }
      </div>
    </>
  );
}
