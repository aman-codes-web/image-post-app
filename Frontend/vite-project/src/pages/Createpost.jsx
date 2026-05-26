import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
export const Createpost = () => {

const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
const formData = new FormData(e.target)

axios.post("https://image-post-app.onrender.com/create-post", formData)
    .then((res) => {
        navigate("/feed")
    })
    .catch((err) => {
        console.log(err)
    })     
   }




  return (
    <section className='create-post-section'>
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <input type='file' name='image' accept='image/*' />
        <input type='text' name='caption' placeholder='Enter Caption ' required />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}
