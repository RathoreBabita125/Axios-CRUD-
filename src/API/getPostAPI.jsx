import axios from "axios"

const postAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPost = () => {
    return postAPI.get('/posts')
}

export const deletePost=(id)=>{
    return postAPI.delete(`/posts/${id}`)
}

export const  createPostData=(post)=>{
    return postAPI.post('/posts', post)
}

export const editPost=(id, post)=>{
    return postAPI.put(`/posts/${id}`, post)
}
