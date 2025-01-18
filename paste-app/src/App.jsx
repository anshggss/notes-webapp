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
      <div className="">
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
        <PasteCard />
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
    <div className="h-full">
      <RouterProvider className="h-full" router={router} />
    </div>
  );
}

export default App;
