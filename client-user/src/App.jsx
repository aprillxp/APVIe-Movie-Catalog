import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Provider>
        <RouterProvider />
      </Provider>
    </>
  );
}

export default App;
