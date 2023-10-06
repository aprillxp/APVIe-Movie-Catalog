import MovieTable from "../components/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncFetchMovies } from "../store/actions/actionCreator";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => {
    return state.movies;
  });

  useEffect(() => {
    dispatch(asyncFetchMovies());
  }, []);

  // if (loading) {
  //   return (
  //     <div className="text-center h-screen">
  //       <span className="justify-center loading loading-infinity loading-lg items-center">
  //         <h3>Load your data...</h3>
  //       </span>
  //     </div>
  //   );
  // }

  return (
    <>
      {loading ? (
        <div className="text-center h-screen">
          <span className="justify-center loading loading-infinity loading-lg items-center">
            <h3>Load your data...</h3>
          </span>
        </div>
      ) : (
        <div className="container w-[75%] m-auto">
          <div className="grid grid-cols-2 items-center mt-6">
            <div className="justify-self-start">
              <h1 className="text-xl font-bold font-sans">Movie List</h1>
            </div>
            <div className="justify-self-end">
              <button className="bg-yellow-500 rounded-md text-black p-2 px-4 hover:bg-yellow-700 font-semibold">
                <Link to="/form">+ Movie</Link>
              </button>
            </div>
          </div>

          {
            // table section
            <div className="h-screen mt-10">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Genre</th>
                      <th>Rating</th>
                      <th>Image</th>
                      <th>Created by</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((movie, i) => {
                      return <MovieTable movie={movie} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            // end table section
          }
        </div>
      )}
    </>
  );
}
