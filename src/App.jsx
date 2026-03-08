import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./services/auth"
import { login, logout } from "./store/features/auth.slice"
import conf from "./conf/index"
import { Navbar, Footer } from './components'
import { Outlet } from 'react-router-dom'
import postServices from './services/config'
import { setPosts } from './store/features/post.slice'
import { client } from './services/config'
import { Analytics } from '@vercel/analytics/react'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((data) => {
        if (data) {

          dispatch(login(data))
        } else {
          dispatch(logout())
        }
      })
      .catch((e) => {
        console.error(e);

      })
      .finally(() => setLoading(false))

    const unsubscribe = client.subscribe(
      `databases.${conf.appwriteDatabaseId}.tables.${conf.appwriteCollectionId}.rows`,
      (response) => {

        postServices.getAllPost().then((posts) => {
          dispatch(setPosts(posts.rows))
        });

      }
    );
    postServices.getAllPost().then((posts) => {

      dispatch(setPosts(posts.rows))
    }).catch((e) => console.error(e));

    return () => unsubscribe()
  }, [])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Analytics/>
    </>
  )
}

export default App
