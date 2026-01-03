import { useEffect, useState } from "react";
import { createPostData, editPost } from "../API/getPostAPI";

const PostFormData = ({ postData, setPostData, editPostData, setEditPostData }) => {

    const [inputData, setInputData] = useState({
        title: '',
        body: ''
    })

    const HandleInputField = (e) => {
        let name = e.target.name
        let value = e.target.value

        setInputData((pre) => {
            return { ...pre, [name]: value }
        })
    }


    const addPostData = async () => {
        try {
            const post = await createPostData(inputData)
            console.log(post);
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
        const action = e.nativeEvent.submitter.value
        // console.log(action);
        if (action === 'Add') {
            addPostData()
        }
        else if (action === 'Edit') {
            updatedPost()
        }

    }


    const isEmpty = Object.keys(editPostData).length == 0
    // console.log(isEmpty);
    useEffect(()=>{
        setInputData({title:editPostData.title, body:editPostData.body})
    },[editPostData])


    const updatedPost = async () => {

        try {
            const post = await editPost(editPostData.id, inputData)
            // console.log(post);
            if (post.status === 200) {
                setPostData((pre) => {
                    return pre.map((currPost) => {
                        return currPost.id === post.data.id ? post.data : currPost
                    })
                })
            }
            setEditPostData({})
            setInputData({ title: '', body: '' })

        }
        catch (error) {
            console.log("Something went wrong!...", error);
        }
    }



    return (
        <form onSubmit={handleSubmitForm}>
            <div className="flex justify-center items-center mt-15">
                <div className="flex flex-row justify-center items-center bg-gray-800 w-[55vw] h-[12vh] gap-4 rounded-xl">
                    <input
                        id={inputData.id}
                        type="text"
                        name='title'
                        value={inputData.title}
                        onChange={HandleInputField}
                        placeholder="Add Title"
                        className="w-[22vw] h-[7vh] p-2 bg-white text-black font-semibold outline-none"
                    />
                    <input
                        id={inputData.id}
                        type="text"
                        name='body'
                        value={inputData.body}
                        onChange={HandleInputField}
                        placeholder="Add Post"
                        className="w-[22vw] h-[7vh] p-2 bg-white text-black font-semibold outline-none"
                    />
                    <button
                        className="text-white font-semibold font-serif text-center p-2 bg-green-700 md:w-[7vw] cursor-pointer"
                        value={isEmpty ? 'Add' : 'Edit'}
                    >{isEmpty ? 'Add' : 'Edit'}</button>
                </div>
            </div>
        </form>
    );
}

export default PostFormData;
