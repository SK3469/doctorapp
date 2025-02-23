
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Service from './components/Services'
import BookAnAppointment from './components/BookAnAppointment'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import MyAppointment from './components/MyAppointment'
import PatientDashboard from './components/PatientDashboard'


function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup/>
    },

    {
      path: "/services",
      element: <Service />
    },
    {
      path: "/book-appointment",
      element: <BookAnAppointment />
    },
    {
      path: "/my-appointment",
      element: <MyAppointment/>
    },
    {
      path: "/patient-dashboard",
      element: <PatientDashboard/>
    }
  ])
  return (
    <>
     <main>
     <RouterProvider router={appRouter} />
   </main>
    </>
  
  )
}

export default App
