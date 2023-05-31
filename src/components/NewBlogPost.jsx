import React from 'react';

function NewBlogPost(){
    return (
        <div className="new-post">
        <img className="banner" src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <form className="blog-post-form" action="">
            <div className="blog-content">
                <label htmlFor="fileInput">
                    <i className="add-banner fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="add-title" autoFocus={true} />
            </div>
            <div className="blog-content">
                <textarea placeholder="Start writing ......." type="text" className="add-title add-content"></textarea>
            </div>
            <button className="publish-content" type="submit">Publish</button>
        </form>
        </div>
    );
}

export default NewBlogPost;