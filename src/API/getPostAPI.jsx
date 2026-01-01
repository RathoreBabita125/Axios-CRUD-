import axios from "axios"
import { useEffect, useState } from "react"

export const GetPostAPI = () => {

    const[postData, setPostData]=useState([])

    const fetchPostData = async () => {
        const response = await axios('https://jsonplaceholder.typicode.com/posts')
        setPostData(response.data)
    }

    useEffect(() => {
        fetchPostData()
    }, [])

    return(
        <>
        <div className=" flex justify-center items-center">
            <ul className="grid grid-cols-3 mt-20 gap-5">
                {
                    postData.map((currPost)=>{
                        return(
                            <>
                                <li className="flex flex-col gap-4 w-[25vw] h-[60vh] border-l-[4px] border-gray-700 p-4 shadow-2xl">
                                    <h1 className="text-2xl font-bold">{currPost.id}</h1>
                                    <p className="text-xl font-semibold font-serif">{currPost.title}</p>
                                    <p className="text-[14px] font-semibold font-serif text-gray-700">{currPost.body}</p>
                                    <div className="flex gap-5">
                                        <button className="p-1 w-[15vw] text-white font-semibold font-serif bg-green-700 rounded-[2px] cursor-pointer">Edit</button>
                                        <button className="p-1 w-[15vw] text-white font-semibold font-serif bg-red-700 rounded-[2px] cursor-pointer">Delete</button>
                                    </div>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )


    
}
