import { useState, useEffect } from "react"
export function useFetch(url) {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    
    useEffect(() => {

       const fetchData = async ()=>{
            setIsPending(true)
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
            setIsPending(false)
       }
       fetchData()
    }, [url]);




  return{data , isPending}
} 

