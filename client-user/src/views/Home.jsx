import React, { useEffect, useRef } from "react";
import MovieCard from "../components/card/MovieCard";
import CastCard from "../components/card/CastCard";
import MovieListCard from "../components/card/MovieListCard";
import Title from "../components/home/Title";
import Loading from "../components/Loading";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/action/movieAction";
import { fetchCasts } from "../store/action/castAction";

function NextArrow(params) {
  const { onClick } = params;
  return (
    <button
      className="rounded-sm  flex absolute text-2xl hover:text-yellow-500 px-4 py-3 top-1/4 right-0 z-20 border border-white"
      onClick={onClick}
    >
      ❯
    </button>
  );
}

function PrevArrow(params) {
  const { onClick } = params;
  return (
    <button
      className="hover:text-yellow-500 text-2xl bg-[hsla(0,0%,100%,.08)] rounded-sm flex absolute px-4 py-3 left-0 z-20 top-1/4 border border-white"
      onClick={onClick}
    >
      ❯
    </button>
  );
}

const Home = () => {
  const { movies, loading } = useSelector((state) => state.movieReducer);
  const { casts } = useSelector((state) => state.castReducer);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const upNext = [
    {
      id: 1,
      title: "Spider-Man: Far From Home",
      genre: "Action",
      imageUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
      trailerUrl: "https://youtu.be/Nt9L1jCKGnE?si=OjZxgoRa-4dKb3Ln",
    },
    {
      id: 2,
      title: "Spiderman: No Way Home",
      genre: "Action",
      imageUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5weKu49pzJCt06OPpjvT80efnQj.jpg",
      trailerUrl: "https://youtu.be/JfVOs4VSpmA?si=eG4aadi8nlzIPP-K",
    },
    {
      id: 3,
      title: "Spiderman: Homecoming",
      genre: "Action",
      imageUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      trailerUrl: "https://youtu.be/rk-dF1lIbIg?si=xCz6sYmnU6B-9E4T",
    },
  ];

  const topTen = [
    {
      id: 1,
      title: "Godzilla Minus One",
      rating: 7.4,
      imgUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fk62hm95sVNHy5Lkx3d18wj1v19.jpg",
      trailerUrl: "https://youtu.be/VvSrHIX5a-0?si=S0471TY6mbJGqwF6",
    },
    {
      id: 2,
      title: "Transformer : Rise of the beast",
      imgUrl: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      rating: 7.5,
      trailerUrl: "https://www.youtube.com/watch?v=itnqEauWQZM",
    },
    {
      id: 3,
      title: "Godzilla x Kong: The New Empire",
      rating: 7.5,
      imgUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mG90MhYWY6AfqF3f942PGATuMML.jpg",
      trailerUrl: "https://youtu.be/lV1OOlGwExM?si=KuwnJ2ZZd32UdJWs",
    },
    {
      id: 4,
      title: "Elemental",
      imgUrl: "https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      rating: 7.8,
      trailerUrl: "https://youtube.com/watch?v=hXzcyx9V0xw",
    },
    {
      id: 5,
      title: "Wonka",
      rating: 7.5,
      imgUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      trailerUrl: "https://youtu.be/otNh9bTjXWg?si=BVibqkh-R0HqKr5Y",
    },
    {
      id: 6,
      title: "Oppenheimer",
      rating: 7.4,
      imgUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      trailerUrl: "https://youtu.be/uYPbbksJxIg?si=WsBTASLLZN9Y2gN-",
    },
    {
      id: 7,
      title: "Twilight",
      imgUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
      rating: 7.5,
      trailerUrl: "https://youtu.be/uxjNDE2fMjI?si=Xl8zPpn0H5UaZKLI",
    },
    {
      id: 8,
      title: "The Fast And The Furious: Tokyo Drift",
      rating: 7.5,
      imgUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/46xqGOwHbh2TH2avWSw3SMXph4E.jpg",
      trailerUrl: "https://youtu.be/p8HQ2JLlc4E?si=irat7up2T5G9CndD",
    },
    {
      id: 9,
      title: "The Fast And The Furious",
      imgUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gqY0ITBgT7A82poL9jv851qdnIb.jpg",
      rating: 7.8,
      trailerUrl: "https://youtu.be/2TAOizOnNPo?si=CIsTbQmwmVlt4hnU",
    },
    {
      id: 10,
      title: "Fast X",
      rating: 7.5,
      imgUrl:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      trailerUrl: "https://youtu.be/32RAq6JzY-w?si=VEUrk6ZjqejttFUc",
    },
  ];

  const firstTools = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const secondTools = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchCasts());
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex">
        <div className="m-auto">
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black py-10" ref={ref}>
      {/* playing section */}
      <div className="md:mx-24 mx-5 py-10">
        <h1 className="mb-6 text-yellow-500 text-4xl font-[roboto] font-bold flex">
          What to watch
        </h1>
        <Slider {...secondTools}>
          {movies.map((movie) => (
            <MovieCard
              title={movie.title}
              key={movie.id}
              image={movie.imgUrl}
              rating={movie.rating}
              slug={movie.slug}
              trailerUrl={movie.trailerUrl}
            />
          ))}
        </Slider>
      </div>
      {/* end playing section */}
    </div>
  );
};

export default Home;
