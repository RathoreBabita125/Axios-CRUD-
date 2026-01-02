import { useState } from "react";
import { createPostData } from "../API/getPostAPI";

const PostFormData = ({ postData, setPostData }) => {

    const [inputData, setInputData] = useState({
        title: '',
        body: ''
    })

    const HandleInputField = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInputData((pre) => {
            return { ...pre, [name]: value }
        })
    }


    const addPostData = async () => {
        try {
            const post = await createPostData(inputData)
            // console.log(post);
            if (post.status === 201) {
                setPostData([...postData, post.data])
                setInputData({ title: '', body: '' })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        addPostData()
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="flex justify-center items-center mt-15">
                <div className="flex flex-row justify-center items-center bg-gray-800 w-[55vw] h-[12vh] gap-4 rounded-xl">
                    <input
                        type="text"
                        name='title'
                        value={inputData.title}
                        onChange={HandleInputField}
                        placeholder="Add Title"
                        className="w-[22vw] h-[7vh] p-2 bg-white text-black font-semibold outline-none"
                    />
                    <input
                        type="text"
                        name='body'
                        value={inputData.body}
                        onChange={HandleInputField}
                        placeholder="Add Post"
                        className="w-[22vw] h-[7vh] p-2 bg-white text-black font-semibold outline-none"
                    />
                    <button
                        className="text-white font-semibold font-serif text-center p-2 bg-green-700 md:w-[7vw] cursor-pointer"
                    >Add</button>
                </div>
            </div>
        </form>
    );
}

export default PostFormData;
