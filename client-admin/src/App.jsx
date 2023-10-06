import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <>
      <div className="bg-black bg-cover">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
