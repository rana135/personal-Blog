import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import About from "../pages/Main/About";
import Cart from "../pages/Main/History";
import Home from "../pages/Main/Home";
import TopRated from "../pages/Main/TopRated";
import BlogDetail from "../components/BlogDetail";
import Wishlist from "../pages/Main/Wishlist";
import BlogList from "../pages/Dashboard/BlogList";
import AddBlog from "../pages/Dashboard/AddBlog";
import UpdateBlog from "../pages/Dashboard/UpdateBlog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "history",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "blog-detail/:blogId",
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "add-product",
        element: <AddBlog />,
      },
      {
        path: "update-blog/:id",
        element: <UpdateBlog />,
      },
      
    ],
  },
]);

export default routes;
