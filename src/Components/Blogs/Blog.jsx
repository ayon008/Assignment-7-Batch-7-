import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './Blog.css'

const Blog = props => {
    const { image, title, date, author } = props.data;
    const authorImage = author[0].authorImg;
    const authorName = author[0].name;
    const readTime = author[0].time;
    const buttonFunction = props.button;
    return (
        <div className='blog'>
            <div className='img'>
                <img src={image} alt="" />
            </div>
            <div className='author-table'>
                <div className='authorDetails'>
                    <div>
                        <img src={authorImage} alt="" />
                    </div>
                    <div>
                        <h4>{authorName}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <p>{readTime} min read <FontAwesomeIcon onClick={()=>buttonFunction(props.data)} icon={faBookmark} /></p>
                </div>
            </div>
            <h2>{title}</h2>
            <p>#beginners  #programming</p>
            <a href="">Mark as Read</a>
        </div>
    );
};

export default Blog;