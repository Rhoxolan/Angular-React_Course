import React from 'react'

export default class PersonalPageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "Name",
            lastName: "Surname",
            eMail: "EMail",
            number: "Number",
            city: "City"
        }
    }

    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                let info = `${this.state.firstName} ${this.state.lastName} ${this.state.eMail} ` +
                    `${this.state.number} ${this.state.city}`;
                alert(info);
            }}>
                <div className='mb-3 w-25'>
                    <label className='form-label' htmlFor='firstName'>First Name:</label>
                    <input className='form-control' type='text' name='firstName' value={this.state.firstName}
                        onChange={e => this.setState({ firstName: e.target.value })} required />
                </div>
                <div className='mb-3 w-25'>
                    <label className='form-label' htmlFor='lastName'>Last Name:</label>
                    <input className='form-control' type='text' name='lastName' value={this.state.lastName}
                        onChange={e => this.setState({ lastName: e.target.value })} required />
                </div>
                <div className='mb-3 w-25'>
                    <label className='form-label' htmlFor='eMail'>E-Mail:</label>
                    <input className='form-control' type='email' name='eMail' value={this.state.eMail}
                        onChange={e => this.setState({ eMail: e.target.value })} required />
                </div>
                <div className='mb-3 w-25'>
                    <label className='form-label' htmlFor='number'>Number:</label>
                    <input className='form-control' type='text' name='number' value={this.state.number}
                        onChange={e => this.setState({ number: e.target.value })} required />
                </div>
                <div className='mb-3 w-25'>
                    <label className='form-label' htmlFor='city'>City:</label>
                    <input className='form-control' type='text' name='city' value={this.state.city}
                        onChange={e => this.setState({ city: e.target.value })} required />
                </div>
                <input type='submit' value="Add" className='btn btn-success' />
            </form>
        );
    }

}