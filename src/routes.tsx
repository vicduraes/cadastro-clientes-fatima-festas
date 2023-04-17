import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Search from './pages/search'
import Result from './pages/result'

const routes = createBrowserRouter([
  { path: '/', element: <SignIn /> },
  { path: '/search', element: <Search /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/result', element: <Result /> }
])

export default routes
