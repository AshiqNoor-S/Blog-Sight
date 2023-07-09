import React , {useEffect,useState} from "react";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";
import { getDocs , collection } from "firebase/firestore";
import {db} from '../firebase-config';
// import Paginator from "./Paginator";
import blogCards from "../blog-cards";

function Blogs(){
	const [postLists, setPostList] = useState([]);
	const postsCollectionRef = collection(db,"posts");
	
	useEffect(()=>{
		const getPosts = async() => {
			const data = await getDocs(postsCollectionRef);
		    setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
		};
		getPosts();
	});

	// console.log(postsCollectionRef);
	console.log(postLists);
	// const postLists = [];
	postLists.sort((blog1 , blog2) => (blog1.title > blog2.title) ? 1: -1);

	return (
		<div className="homePage">{	
				    <div className="blogs-section">
					<h1 className="blog-pg-heading">BlogSight</h1>
					<SearchBar />
					<div className="blog-card-section">
					{postLists.map((post) => 
			            (<BlogCard key={post.id} cardTitle={post.title} cardContent={post.postText.substring(0,200)} />
                    ))}
 					</div>
				</div>
		}
		</div>
	);
}
    

export default Blogs;