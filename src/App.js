
import './App.css';
import Home from './pages/Home';
import  { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
// import Signup from './components/Signup';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './components/Error';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './utils/store';

const AppLayout = ()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path: '/',
       element:<Home/>,
      }
    ]
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])


function App() {
  return (
    <Provider store={store}>

    <RouterProvider router={appRouter}>


    </RouterProvider>
    </Provider>
  );
}

export default App;
