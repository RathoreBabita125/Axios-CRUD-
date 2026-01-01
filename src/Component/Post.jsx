import { useEffect, useState } from "react";
import { getPost } from "../API/getPostAPI";


const Post = () => {

    const [postData, setPostData] = useState([])

    const fetchPostData = async () => {
        const data = await getPost()
        setPostData(data.data)
    }
    
    useEffect(() => {
        fetchPostData()
    }, [])


    return (
        <>
            <div>
                <div className="flex justify-center items-center mt-15">
                    <div className="flex flex-row justify-center items-center bg-gray-800 w-[55vw] h-[12vh] gap-4 rounded-xl">
                        <input type="text" placeholder="Add Title" className="w-[22vw] h-[7vh] p-2 bg-white text-black font-semibold outline-none"/>
                        <input type="text" placeholder="Add Post" className="w-[22vw] h-[7vh] p-2 bg-white text-black font-semibold outline-none"/>
                        <button className="text-white font-semibold font-serif text-center p-2 bg-green-700 w-[7vw] cursor-pointer">Add</button>
                    </div>
                </div>
                <div className=" flex justify-center items-center">
                    <ul className="grid grid-cols-3 mt-20 gap-10">
                        {
                            postData.map((currPost) => {
                                return (
                                    <>
                                        <li className="flex flex-col gap-5 w-[25vw] h-[60vh] border-l-[4px] border-gray-700 p-4 shadow-2xl rounded-xl">
                                            <h1 className="text-2xl font-bold">{currPost.id}</h1>
                                            <p className="text-xl font-semibold font-serif text-gray-800">{currPost.title}</p>
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
            </div>
        </>
    );
}

export default Post;
