import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { Toaster } from "react-hot-toast";
import PopularPage from "./pages/PopularPage";
import UpcomingPage from "./pages/UpcomingPage";
import TopRatedPage from "./pages/TopRatedPage";
import NowPlaying from "./pages/NowPlaying";


function App() {
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },{
      path:"/popular",
      element:<PopularPage/>
    },{
      path:"/upcoming",
      element:<UpcomingPage/>
    },{
      path:"/topRated",
      element:<TopRatedPage/>
    },{
      path:"/nowplaying",
      element:<NowPlaying/>
    }
  ]);


  return (
    <div className="">
      <RouterProvider router={routes} />
      <Toaster/>
    </div>
  );
}

export default App;
