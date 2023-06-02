import React , {useState} from "react";
import Home from "./Home";
import BlogHome from "./BlogHome";
import Blogs from "./Blogs";
import NewBlogPost from "./NewBlogPost";
import Footer from "./Footer";
import Login from "./Login"
import { Routes, Route } from "react-router-dom";
import PatientMonitoring from "./PatientMonitoring";

function App(){
    const [isAuth,setIsAuth] = useState(false);
    return (
    <div>
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/blog-home" element={<BlogHome />} /> */}
        <Route path="/" element={<BlogHome setIsAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/newblogpost" element={<NewBlogPost />} />
        {/* <Route path="/patient-monitoring" element={<PatientMonitoring />} /> */}
    </Routes>
    <Footer />
    </div>
);}

export default App;