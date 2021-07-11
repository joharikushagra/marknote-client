import React, { useEffect } from 'react'
import { useRouter} from "next/router"

function WithAuth({ children }) {
    const router = useRouter()
   useEffect(() => {
       if(!localStorage.getItem("jwt")?.length) {
           router.push("/")
       }
   }, [])
    return <>{children}</>
}

export default WithAuth
