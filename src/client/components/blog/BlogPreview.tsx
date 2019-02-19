import * as React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

let halfText = (content: string) => {
    let text = content;
    let preview = text.substr(0, 1000);
    return preview;
}

const BlogPreview = (props: any) => {
    return (
        <main className='container'>
            <section className='row my-5'>
                <div className="col-md-12">
                    <h3 className='text-primary mt-5'>{props.blog.title}</h3>
                    <hr className='bg-primary'></hr>
                    <p className='text-danger'>{halfText(props.blog.content)} . . . <Link className='text-primary' to={`/blogs/${props.blog.id}`}>Continue Reading</Link></p>
                    <p className='text-primary'>Joshua Holland</p>
                    <p className='text-primary'>{moment(props.blog._created).format('MMM DD YYYY')}</p>
                </div>
            </section>
        </main>
    )
};

export default BlogPreview;