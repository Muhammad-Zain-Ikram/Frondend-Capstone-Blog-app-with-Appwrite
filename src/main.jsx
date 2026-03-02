import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from "./store/store.js"
import App from './App.jsx'
import { Provider } from 'react-redux'
import {AuthLayut, Layout} from "./components/index.js"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import {AddPost, AllPost, EditPost, LandingPage,LoginPage, Post, SignUpPage} from './pages/index.js'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<LandingPage/>}/>

      <Route path='/login' element={
        <AuthLayut authentication={false}>
            <LoginPage/>
      </AuthLayut>}/>

      <Route path='/sign-up' element={
        <AuthLayut authentication={false}>
            <SignUpPage/>
      </AuthLayut>}/>

      <Route path='/all-post' element={
        <AuthLayut authentication>
          <AllPost/>
        </AuthLayut>
      }/>

      <Route path='/add-post' element={
        <AuthLayut authentication>
          <AddPost/>
        </AuthLayut>
      }/>

      <Route path='/edit-post' element={
        <AuthLayut authentication>
          <EditPost/>
        </AuthLayut>
      }/>
      
      <Route path='/blog/:slug' element={
        <AuthLayut authentication>
          <Post/>
        </AuthLayut>
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
