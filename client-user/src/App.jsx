import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./store/reducers";
import router from "./router";

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
