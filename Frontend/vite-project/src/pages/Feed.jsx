import React,{useState,useEffect}from 'react'
import axios from "axios"
const Feed = () => {

    const [ posts, setPosts ] = useState([
        {
            _id: "1",
            image: 'https://thumbs.dreamstime.com/b/woman-using-tablet-pc-selecting-software-testing-pressing-virtual-screen-94363882.jpg',
            caption: 'This is the first post' 
        }
    ])


    useEffect(()=>{

        axios.get("https://image-post-app.onrender.com/posts")
            .then((res) => {

setPosts(res.data.posts) 

})

    },[])

    
  return (
    <section className='feed-section'>
     {
        posts.map((post) => (
            <div key={post._id} className='post'>
                <img src={post.image} alt='Post Image' />
                <p>{post.caption}</p>
            </div>
        )) 
     }
    </section>
  )
}

export default Feed 








//install axios package to make http request to backend server in frontend
//install cors package in backend server to allow cross-origin requests from frontend to backend

