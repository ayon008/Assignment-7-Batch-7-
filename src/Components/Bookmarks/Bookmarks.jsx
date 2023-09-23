import React from 'react';
import './Borkmarks.css'
import SelectedBlog from '../selectedBlog/SelectedBlog';

const Bookmarks = props => {
    const blogs = props.blogs;
    const timeArray = props.showTime;
    let time = 0;
    for (const singleTime of timeArray) {
        let readTime = singleTime.author[0].time;
        time = time + readTime;
    }

    return (
        <div className='bookmarks'>
            <div className='bookmarkHeader'>
                <h3>Spent Time on Read: {time} min</h3>
            </div>
            <div>
                <div className='blogList'>
                    <h3>Bookmarked Blogs: {blogs.length}</h3>
                    {
                        blogs.map(blog => <SelectedBlog key={blog.id} showBlog={blog}></SelectedBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;