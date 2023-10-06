import { Link } from "react-router-dom";

export default function MovieTable({ movie, i }) {
  return (
    <>
      <tr>
        <th>{movie.id}</th>
        <td>{movie.title}</td>
        <td>{movie.Genre.name}</td>
        <td>{movie.rating}</td>
        <td>
          <img src={movie.imgUrl} alt="" className="w-10" />
        </td>
        <td>{movie.User.username}</td>
        <td>
          <div className="flex gap-4">
            <Link to={`/edit-form/${movie.id}`}>
              <button className="text-yellow-500 font-bold">Edit</button>
            </Link>
            <button className="text-red-500 font-bold">Delete</button>
          </div>
        </td>
      </tr>
    </>
  );
}
