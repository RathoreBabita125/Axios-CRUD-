import axios from "axios"

const postAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPost = () => {
    return postAPI.get('/posts')
}

export const deletePost=()=>{
    return postAPI.delete('/posts/1')
}
