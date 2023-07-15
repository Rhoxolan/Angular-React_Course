import React, {useRef} from 'react'

export default function PersonalPageForm() {
    let firstNameRef = useRef();
    let lastNameRef = useRef();
    let eMailRef = useRef();
    let numberRef = useRef();
    let cityRef = useRef();

    return (
        <form onSubmit={e => {
            e.preventDefault();
            let info = `${firstNameRef.current.value} ${lastNameRef.current.value} ${eMailRef.current.value} ` +
                `${numberRef.current.value} ${cityRef.current.value}`;
            alert(info);
        }}>
            <div className='mb-3 w-25'>
                <label className='form-label' htmlFor='firstName'>First Name:</label>
                <input className='form-control' type='text' name='firstName' ref={firstNameRef} defaultValue={"Name"} required />
            </div>
            <div className='mb-3 w-25'>
                <label className='form-label' htmlFor='lastName'>Last Name:</label>
                <input className='form-control' type='text' name='lastName' ref={lastNameRef} defaultValue={"Surname"} required />
            </div>
            <div className='mb-3 w-25'>
                <label className='form-label' htmlFor='eMail'>E-Mail:</label>
                <input className='form-control' type='email' name='eMail' ref={eMailRef} defaultValue={"EMail"} required />
            </div>
            <div className='mb-3 w-25'>
                <label className='form-label' htmlFor='number'>Number:</label>
                <input className='form-control' type='text' name='number' ref={numberRef} defaultValue={"Number"} required />
            </div>
            <div className='mb-3 w-25'>
                <label className='form-label' htmlFor='city'>City:</label>
                <input className='form-control' type='text' name='city' ref={cityRef} defaultValue={"City"} required />
            </div>
            <input type='submit' value="Add" className='btn btn-success' />
        </form>
    );
}