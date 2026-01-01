// import { createContext, useContext, useEffect, useState } from "react";

// export const APIContext = createContext()

// export const APIContextProvider = ({ children }) => {

//     const [postData, setPostData] = useState([])

//     const fetchPostData = async () => {
//         const response = await axios('https://jsonplaceholder.typicode.com/posts')
//         setPostData(response.data)
//     }

//     useEffect(() => {
//         fetchPostData()
//     }, [])

//     return <APIContext.prototype value={postData}>
//         {children}
//     </APIContext.prototype>
// }

// // export const usePostAPI=()=>{
// //     const postAPIContext=useContext(APIContext)
// //     return postAPIContext
// // }

