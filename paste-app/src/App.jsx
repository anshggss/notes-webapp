import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/homePage";
import Pastes from "./components/pastesPage";
import NavBar from "./components/navBar";
import ViewPaste from "./components/viewPaste";
import PasteCard from "./components/pasteCard/pasteCard";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        // <div className="h-full flex flex-col">

        // </div>
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/pastes",
      element: (
        <>
          <NavBar />
          <Pastes />
        </>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <>
          <NavBar />
          <ViewPaste />
        </>
      ),
    },
  ],
  {
    basename: "/notes-webapp/",
  }
);

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
