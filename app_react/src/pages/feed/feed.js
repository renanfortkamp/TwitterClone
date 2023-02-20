import React, { useState,useEffect } from 'react';
import Posts from './Posts.js';

export default function Feed() {
    const [text, setText] = useState('');
    const [Id, setId] = useState('');
    const [posts, setPosts] = useState("");

    const updatePost = () => {
        setPosts("Atualizando...");
        setTimeout(() => {
            setPosts(<Posts />);
        }, 300);
    };

    useEffect(() => {
        updatePost();
    }, []);


    const postMessage = (e) => {
        try {
            e.preventDefault();
            fetch("http://localhost:5066/api/Sweets?userId="+Id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: text,
                })

                
            })
                .then(updatePost())
                

        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className='posts' style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",border:"solid 1px red"}}>
            <h1>Feed</h1>
            <h2>{Id}</h2>
            <form onSubmit={(e)=>{postMessage(e)}}>
                <input type="text" placeholder="text" onChange={(e) => setText(e.target.value)} />
                <input type="text" placeholder="Id" onChange={(e) => setId(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>

            {posts}
            
            

        </div>


    )
        ;
};