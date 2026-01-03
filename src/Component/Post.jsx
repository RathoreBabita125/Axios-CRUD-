import { useEffect, useState } from "react";
import { deletePost, editPost, getPost } from "../API/getPostAPI";
import PostFormData from "./PostFormData";

const Post = () => {

    const [postData, setPostData] = useState([])
    const [editPostData, setEditPostData]=useState({})

    const fetchPostData = async () => {
        const data = await getPost()
        setPostData(data.data)
    }
    useEffect(() => {
        fetchPostData()
    }, [])


    const handleDeleteBTN = async (id) => {
        try {
            const deletePostData = await deletePost(id)
            // console.log(deletePostData);
            if (deletePostData.status === 200) {
                const updatedPost = postData.filter((currPost) => {
                    return currPost.id !== id
                })
                setPostData(updatedPost)
            }
        }
        catch (error) {
            console.log("Something went wrong!....", error);
        }
    }


    const handleEditBTN=(postItem)=>{
        return setEditPostData(postItem)
    }
    

    console.log(editPostData);
    





    return (
        <section >
            <PostFormData postData={postData} setPostData={setPostData} editPostData={editPostData} setEditPostData={setEditPostData}/>
            <div className=" flex justify-center items-center">
                <ul className="grid grid-cols-3 mt-20 gap-10" start={1}>
                    {
                        postData.map((currPost) => {
                            return (
                                <li key={currPost.id} className="flex flex-col gap-5 md:w-[25vw] md:h-[60vh] border-l-[4px] border-gray-700 p-4 shadow-2xl rounded-xl">
                                    <h1 className="text-2xl font-bold">{currPost.id}</h1>
                                    <p className="text-xl font-semibold font-serif text-gray-800">{currPost.title}</p>
                                    <p className="text-[14px] font-semibold font-serif text-gray-700">{currPost.body}</p>
                                    <div className="flex gap-5">
                                        <button 
                                        className="p-1 md:w-[15vw] text-white font-semibold font-serif bg-green-700 rounded-[2px] cursor-pointer"
                                        onClick={()=>handleEditBTN(currPost)}
                                        >Edit</button>
                                        <button
                                            className="p-1 md:w-[15vw] text-white font-semibold font-serif bg-red-700 rounded-[2px] cursor-pointer"
                                            onClick={() => handleDeleteBTN(currPost.id)}
                                        >Delete</button>
                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default Post;
