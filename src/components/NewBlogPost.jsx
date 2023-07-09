import React , {useState} from 'react';
import { auth, db } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import {addDoc,collection} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

function NewBlogPost(){

    const [title,setTitle] = useState("");
    const [postText,setPostText] = useState("");

    const postsCollectionRef = collection(db,"posts");
    let navigate = useNavigate();

    const createPost = async()=> {
        addDoc(postsCollectionRef, {title, postText , author:{name: auth.currentUser.displayName , id:auth.currentUser.uid}});
        navigate("/blogs");
    }

    return (
        <div className="new-post">
        <img className="banner" src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <form className="blog-post-form" action="">
            <div className="blog-content">
                <label htmlFor="fileInput">
                    <i className="add-banner fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" onChange={(event)=>{setTitle(event.target.value)}} placeholder="Title" className="add-title" autoFocus={true} />
            </div>
            <div className="blog-content">
                <textarea placeholder="Start writing ......." onChange={(event)=>{setPostText(event.target.value)}} type="text" className="add-title add-content"></textarea>
            </div>
            <button onClick={createPost} className="publish-content" type="submit">Publish</button>
        </form>
        </div>
    );
}

export default NewBlogPost;