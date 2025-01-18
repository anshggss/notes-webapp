import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/homePage";
import Pastes from "./components/pastesPage";
import NavBar from "./components/navBar";
import ViewPaste from "./components/viewPaste";
import PasteCard from "./pasteCard/pasteCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-full flex flex-col">
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <NavBar />
        <Pastes />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <NavBar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
