import React from 'react'
import blogimage from '../images/photo-14.jpg';

function BlogImage() {
    return (
        <div className="blog-signle-img" data-aos="fade-in" data-aos-duration="500">
            <img src={blogimage} alt="" />
        </div>
    )
}

export default BlogImage
