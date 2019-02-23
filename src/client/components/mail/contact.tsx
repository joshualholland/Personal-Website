import * as React from 'react';
import json from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom';


export default class Contact extends React.Component<IContactProps, IContactState> {
    constructor(props: IContactProps) {
        super(props)
        this.state = {
            from: null,
            subject: null,
            html: null,
            status: null
        }
    }

    private sending: boolean = false;
    private message: JSX.Element = null;

    async handleSubmit(e: any) {
        e.preventDefault();

        if (this.sending) return;

        let email: any = {
            from: this.state.from,
            subject: this.state.subject,
            html: this.state.html
        };

        try {
            this.sending = true;

            let res = await json('/api/contact', 'POST', email);
            if (res) {
                this.setState({ status: 'Success' })
                setTimeout(() => {
                    this.props.history.push('/');
                }, 3000);
            } else {
                this.setState({ status: 'Error' });
            }
        } catch (e) {
            throw (e)
        }
    }

    render() {

        if (this.state.status === 'Success') {
            this.message = <div className='alert alert-primary p-1 m-3' role='alert'>Thanks for reaching out! I'll be in touch with you shortly.</div>
        } else if (this.state.status === 'Error') {
            this.message = <div className='alert alert-primary p-1 m-3' role='alert'>Error in sending</div>
        }

        return (
            <>
                <main className='container'>
                    <section className='row my-5'>
                        <div className='col-md-12'>
                            <h1 className='text-primary mt-5'>Want to get in touch?</h1>
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="form-group">
                                    <label className='text-primary' htmlFor="email">Email:</label>
                                    <input type="email" id="email" className="form-control" placeholder="Your email" onChange={(e) => this.setState({ from: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label className='text-primary' htmlFor="subject">Subject:</label>
                                    <input type="text" id="subject" className="form-control" placeholder='Subject' onChange={(e) => this.setState({ subject: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label className='text-primary' htmlFor="message">Message:</label>
                                    <textarea id="content" rows={4} className="form-control" onChange={(e) => this.setState({ html: e.target.value })} />
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
};

interface IContactProps extends RouteComponentProps { };
interface IContactState {
    from: string,
    subject: string,
    html: string,
    status: string
};