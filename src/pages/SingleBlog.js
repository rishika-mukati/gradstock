import React from 'react'
import { Container } from 'react-bootstrap'
import BlogDateSocial from '../components/BlogDateSocial'
import BlogDesc from '../components/BlogDesc'
import BlogImage from '../components/BlogImage'
import BlogPrevNext from '../components/BlogPrevNext'

function SingleBlog() {
    return (
        <div className='middle-section'>
            <div className="page-title">
                <div className="container">
                    <div className="page-title-in">
                        <h2>Single Blog</h2>
                    </div>
                </div>
            </div>
            <Container>
                <div className="blog-signle">
                    <BlogImage />
                    <BlogDateSocial />
                    <BlogDesc />
                </div>
                <BlogPrevNext />
            </Container>
        </div>
    )
}

export default SingleBlog
