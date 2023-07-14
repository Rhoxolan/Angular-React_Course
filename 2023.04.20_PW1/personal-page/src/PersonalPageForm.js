import React from 'react'

export default class PersonalPageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            city: ""
        }
    }

    render() {

        const formOnSubmit = e => {
            e.preventDefault();
            alert(this.state.firstName);
        }

        const onNameChange = e => {
            this.setState({ firstName: e.target.value });
        }

        return (
            <form onSubmit={formOnSubmit}>
                <div className='mb-3'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type='text' name='firstName' value={this.state.firstName} onChange={onNameChange} />
                </div>
                <input type='submit' value="Add" className='btn btn-success'/>
            </form>
        );
    }

}