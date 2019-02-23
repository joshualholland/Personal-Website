import * as React from 'react';
import moment from 'moment';
import  json  from '../../utils/api';
import { Link, RouteComponentProps } from 'react-router-dom';

export default class SingleBlog extends React.Component<ISingleProps, ISingleState> {
    constructor(props: ISingleProps) {
        super(props)
        this.state = {
            id: null,
            title: null,
            content: null,
            _created: null
        }
    }

    async componentDidMount() {
        try {
            console.log(this.props.match.params.id)
            let blog = await json(`/api/blogs/${this.props.match.params.id}`);
            this.setState({ id: blog[0].id, title: blog[0].title, content: blog[0].content, _created: blog[0]._created });
        } catch (e) { console.log(e) }
    };

    render() {
        return (
            <main className='container'>
                <section className='row my-5'>
                    <div className="col-md-12">
                        <h3 className='text-primary mt-5'>{this.state.title}</h3>
                        <hr className='bg-primary'></hr>
                        <p className='text-danger'>{this.state.content}</p>
                        <p className='text-primary'>Joshua Holland</p>
                        <p className='text-primary'>{moment(this.state._created).format('MMM DD YYYY')}</p>
                        <Link to='/blogs' className='text-primary'>Back to All Blogs</Link>
                    </div>
                </section>
            </main>
        )
    }
}

interface ISingleProps extends RouteComponentProps<{ id: string }> { };
interface ISingleState {
    id: number,
    title: string,
    content: string,
    _created: any
};

