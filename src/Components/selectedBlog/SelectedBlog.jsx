import React from 'react';
import './SelectedBlog.css';


const SelectedBlog = props => {
    const singleBlog = props.showBlog;
    const { title } = singleBlog;
    return (
        <div>
            <div className='selectedBlog'>
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default SelectedBlog;