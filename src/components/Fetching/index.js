import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Fetching() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://192.168.43.129:8000/api/')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <h1>Hola</h1>
            {
                posts.map(post => (
                <div key={post.id}>
                    <h1>
                     {post.title}
                    </h1> 
                    <span>{post.body}</span>
                </div>
                )
                )
            }   
        </div>
    )
}
