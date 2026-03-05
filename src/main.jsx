import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from "./store/store.js"
import App from './App.jsx'
import { Provider } from 'react-redux'
import {AuthLayout} from "./components/index.js"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import {AddPost, AllPost, EditPost, LandingPage,LoginPage, Post, SignUpPage} from './pages/index.js'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<LandingPage/>}/>

      <Route path='/login' element={
        <AuthLayout authentication={false}>
            <LoginPage/>
      </AuthLayout>}/>

      <Route path='/sign-up' element={
        <AuthLayout authentication={false}>
            <SignUpPage/>
      </AuthLayout>}/>

      <Route path='/all-post' element={
        <AuthLayout authentication>
          <AllPost/>
        </AuthLayout>
      }/>

      <Route path='/add-post' element={
        <AuthLayout authentication>
          <AddPost/>
        </AuthLayout>
      }/>

      <Route path='/edit-post/:slug' element={
        <AuthLayout authentication>
          <EditPost/>
        </AuthLayout>
      }/>

      <Route path='/post/:slug' element={
        <AuthLayout authentication>
          <Post/>
        </AuthLayout>
      }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider  router={router}/>
  </Provider>
  </StrictMode>
)
