import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import authService from "./services/auth" 
import {login, logout} from "./store/features/auth.slice"
import Logo from './components/Logo'
import Navbar from './components/header/Navbar'

import {LogOut, LogOutIcon, PenSquare} from "lucide-react" 
import { LandingPage } from './pages'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import PostCard from './components/PostCard'
import { Editor } from '@tinymce/tinymce-react'
import  conf from "./conf/index"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=> {
      if (data) {
        dispatch(login({data}))
      } else {
        dispatch(logout())
      }
    })
    .catch((e)=>{
      console.error(e);
      
    })
    .finally(()=> setLoading(false))
  },[])
console.log(conf);

  return (
    <>
    <div className= "bg-black">

    {/* <Editor
      apiKey={conf.tinyApiKey}
      initialValue="welcome"
      init={{
        branding : false,
        selector: 'textarea',  // change this value according to your HTML
        height:500,
        // width: 300,
        initialValue: "Welcome",
        menubar: true,
            plugins: [
              "image",
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "anchor",
                "wordcount"
              ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            statusbar: false, 
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
          }}
          // onEditorChange={onChange}
          /> */}
          </div>
          <div className="">OOOOO</div>
    </>
  )
}

export default App
