
import './App.css';
import Home from './pages/Home';
import  { createBrowserRouter,RouterProvider} from "react-router-dom"
// import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
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
    <>

    <RouterProvider router={appRouter}>
    <Navbar/> 

    </RouterProvider>
    </>
  );
}

export default App;
