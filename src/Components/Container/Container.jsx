import React, { useEffect, useState } from 'react';
import './Container.css';
import Blog from '../Blogs/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';


const Container = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const [blogLists, setBlogLists] = useState([]);

    const buttonHandle = blog => {
        let newBlogLists = [...blogLists, blog];
        const matched = newBlogLists.find(newBlogList => newBlogList.id === blog.id);
        const remaining = newBlogLists.filter(newBlogList => newBlogList.id !== blog.id);
        let uniqueBlogList = [...remaining, matched];
        setBlogLists(uniqueBlogList);
    }

    return (
        <div className='container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog button={buttonHandle} key={blog.id} data={blog}></Blog>)
                }
            </div>
            <div className='bookmarks'>
                <Bookmarks blogs={blogLists}></Bookmarks>
            </div>
        </div>
    );
};

export default Container;