export default function Genre() {
  return (
    <div className="flex">
      <div className="container overflow-x-auto h-screen justify-center items-center w-full bg-black block m-auto bg-cover">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>CREATED AT</th>
              <th>UPDATED AT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button className="text-red-500 font-bold">Delete</button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <button className="text-red-500 font-bold">Delete</button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>
                <button className="text-red-500 font-bold">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
