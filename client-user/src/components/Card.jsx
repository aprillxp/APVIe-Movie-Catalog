export default function movieCard({ item }) {
  return (
    <>
      <div className="card bg-gray-900 shadow-md relative">
        <div className="absolute top-0">
          <button className="hover:bg-black py-2 px-3 rounded-br-lg">
            <Icon.Bookmark color="white" size={25} />
          </button>
        </div>
        <figure>
          <img src={item.imgUrl} alt="car!" className="w-full h-fit" />
        </figure>
        <div className="card-body -mt-4">
          <h2 className="text-lg font-medium text-white">★ {item.rating}</h2>
          <h4 className="text-base font-normal text-white">{item.title}</h4>
          <div className="card-actions justify-center mt-4">
            <button className="bg-gray-900 rounded-md text-white p-2 w-40 hover:bg-gray-800 font-semibold">
              Edit
            </button>
            <button className="bg-gray-900 rounded-md text-red-500 p-2 w-40 hover:bg-gray-800 font-semibold">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
