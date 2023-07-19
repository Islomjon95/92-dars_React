import React from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import  style from "./css/user.module.css"


function Users() {
    // const [users, setUsers] = useState([])
    const [url , setUrl] = useState("http://localhost:3000/users")
    

    const {data:users, isPending} = useFetch(url)
    console.log(users)
    // const fetchUser = useCallback(
    //     async()=>{
    //         const req = await fetch(url)
    //         const data = await req.json()
    //         setUsers(data)
    //     },
    //     [url]
    // );

    // useEffect(()=>{
    //     fetchUser()
    //     // fetch(url)
    //     // .then((res)=>res.json())
    //     // .then((data)=>setUsers(data))
    // } , [fetchUser])
   

  return (
        <>
            <h1 className={style.coders_user}>Coders</h1>
            {isPending&&<div>Loading...</div>}
            <div className={style.filter_user}>
                <button onClick={()=>setUrl("http://localhost:3000/users?location=China")} className={style.btn}>China coders</button>
                <button onClick={()=>setUrl("http://localhost:3000/users?location=Uzbekistan")} className={style.btn}>Uzbek coders</button>
                <button onClick={()=>setUrl("http://localhost:3000/users")} className={style.btn}>All coders</button>
            </div>
            {
                users&&users.map((item)=>{
                    return(
                        <div className={style.user_card}  key={item.id}>
                            <img className={style.card_img} src="https://picsum.photos/200/200" alt="" />
                            <h2 className={style.card_name}>Name: {item.name}</h2>
                            <h2 className={style.card_lastname}>Lastname: {item.lastname}</h2>
                            <p className='card_age'>Age: {item.age}</p>
                            <p className='card_loc'>Location: <i>{item.location}</i></p>
                        </div>
                    )
                })
            }
        </>
  )
}

export default Users