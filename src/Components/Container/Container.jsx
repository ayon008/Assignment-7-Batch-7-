import React, { useEffect, useState } from 'react';
import './Container.css';
import Blog from '../Blogs/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        const notify = () => toast("❌ Bookmarks all ready added");
        const remaining = newBlogLists.filter(newBlogList => newBlogList.id !== blog.id);
        let uniqueBlogList = [...remaining, matched];
        const matched2 = blogLists.find(blogList => blogList.id === blog.id);
        if (matched2) {
            notify();
        }
        setBlogLists(uniqueBlogList);
    }

    const [timeArray, setTimeArray] = useState([])
    const markButton = passedBlog => {
        let newArray = [...timeArray, passedBlog];
        const existing = newArray.find(singleTime => singleTime.id === passedBlog.id);
        const remaining = newArray.filter(singleTime => singleTime.id !== passedBlog.id);
        newArray = [...remaining, existing];
        const matched = timeArray.find(time => time.id === passedBlog.id)
        const notify = () => toast("❌ all ready read");
        if (matched) {
            notify();
        }
        setTimeArray(newArray);
    }

    return (
        <div className='container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blog markButton={markButton} button={buttonHandle} key={blog.id} data={blog}></Blog>)
                }
            </div>
            <div className='bookmarks'>
                <Bookmarks showTime={timeArray} blogs={blogLists}></Bookmarks>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Container;