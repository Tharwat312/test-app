import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import Portfolio from './Components/Portfolio/Portfolio'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
function App() {
  const routes = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
