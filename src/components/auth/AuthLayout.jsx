import { Loader } from "lucide-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Protected({children, authentication = true}) {
console.log(authentication);

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && !authStatus) {
            navigate("/login")
        }

        // Route is for non-logged users only (like login/register page)
        if (!authentication && authStatus) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, authentication])

  return loader ? <Loader/> : <>{children}</>
}

// import { Loader } from "lucide-react"
// import { useSelector } from "react-redux"
// import { Navigate } from "react-router-dom"

// export default function Protected({ children, authentication = true }) {

//     const { status: authStatus, loading } = useSelector(state => state.auth)
// // console.log);

//     // Wait until auth check is complete
//     if (loading) {
//         return <Loader />
//     }

//     // If route requires login and user not logged in
//     if (authentication && !authStatus) {
//         return <Navigate to="/login" replace />
//     }

//     // If route is guest-only and user is logged in
//     if (!authentication && authStatus) {
//         return <Navigate to="/" replace />
//     }

//     return children
// }