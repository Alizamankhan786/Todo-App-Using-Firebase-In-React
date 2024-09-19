import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Profile from './Pages/NestedScreens/Profile.jsx';
import NewsFeed from './Pages/NestedScreens/NewsFeed.jsx';
import ProtectedRoutes from './Pages/ProtectedRoutes.jsx';
import UserData from './Pages/NestedScreens/UserData.jsx';

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Layout />,
    children:[
      {
        path: `profile`,
        element: <Profile />,
      },
      {
        path: `newsfeed`,
        element:<ProtectedRoutes component = {<NewsFeed />}/>,
      },
      {
        path: `Profile`,
        element:<UserData />,
      },
    ]
  },
  {
    path: `login`,
    element: <Login />
  },
  {
    path: `register`,
    element:<Register />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}>
  <App />
  </RouterProvider>
)
