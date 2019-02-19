import * as React from 'react';
import { Link } from 'react-router-dom';
import { json } from '../../utils/api';
import BlogPreview from './BlogPreview';

export default class Blogs extends React.Component<IBlogsProps, IBlogsState> {
    constructor(props: IBlogsProps) {
        super(props)
        this.state = {
            blogs: []
        }
    }

    async componentDidMount() {
        try {
            let blogs = await json('/api/blogs');
            this.setState({ blogs })
        } catch (e) {
            console.log(e)
        }
    }

    returnBlog() {
        return(
            this.state.blogs.map((blog) => {
                return (
                    <BlogPreview blog={blog} key={blog.id} />
                )
            })
        )
    }

    render() {
        return (
            <div className="container">
                {this.returnBlog()}
            </div>
        )
    }
};

interface IBlogsProps { 
};
interface IBlogsState {
    blogs: any[];
};