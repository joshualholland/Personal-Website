import * as React from 'react';
import { json } from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom';


export default class Contact extends React.Component<IContactProps, IContactState> {
    constructor(props: IContactProps) {
        super(props)
        this.state = {
            from: null,
            subject: null,
            content: null
        }
    }

    private success: boolean = false;
    private message: JSX.Element = null;

    async handleSubmit(e: any) {
        e.preventDefault();
        if(this.success) return;
        
        try {
            this.success = true;
            await json('/api/contact', 'POST', this.state);
            this.props.history.push('/')
        } catch (e) {
            console.log(e)
        }
    }

    render() {

        if (this.success === true) {
            this.message = <div className='alert alert-primary p-1 m-3' role='alert'>Thanks for reaching out! I'll be in touch with you shortly.</div>
        };

        return (
            <>
                <main className='container'>
                    <section className='row my-5'>
                        <div className='col-md-12'>
                            <h1 className='text-primary mt-5'>Want to get in touch?</h1>
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="form-group">
                                    <label className='text-primary' htmlFor="name">Email:</label>
                                    <input type="email" id="email" className="form-control" placeholder="Your email" onChange={(e) => this.setState({ from: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label className='text-primary' htmlFor="email">Subject:</label>
                                    <input type="text" id="subject" className="form-control" placeholder='Subject' onChange={(e) => this.setState({ subject: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label className='text-primary' htmlFor="message">Message:</label>
                                    <textarea id="content" rows={4} className="form-control" onChange={(e) => this.setState({ content: e.target.value })} />
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Contact Me!</button>
                            </form>
                            {this.message}
                        </div>
                    </section>

                </main>
            </>
        )
    }
}

interface IContactProps extends RouteComponentProps { };
interface IContactState {
    from: string,
    subject: string,
    content: string
};