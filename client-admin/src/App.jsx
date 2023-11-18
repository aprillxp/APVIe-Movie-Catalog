import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import store from "./store/reducer";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
