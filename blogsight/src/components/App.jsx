import React from "react";
import Home from "./Home";
import Blogs from "./Blogs";
import NewBlogPost from "./NewBlogPost";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

function App(){
    return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/newblogpost" element={<NewBlogPost />} />

    </Routes>
    <Footer />
    </div>
);}

export default App;