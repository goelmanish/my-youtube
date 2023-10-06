import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import Login from "./components/Login";

const Layout = () =>{
  return (
    <Provider store={store}>
        <>
        <div className=''>
          <Head/>
          <div className=''>
          <Body/>
          </div>
        </div>
      </>
      </Provider>
  );}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      ,
      {
        path: "login",
        element: <Login />,
      }
    ],
  },
]);
/*
Head
Body
  Sidebar
    menulist
  MainContainer
    buttons list
    video container
      videocard
*/
function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
