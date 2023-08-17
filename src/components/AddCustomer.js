import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";

function AddCustomer({ setCustomers, inEditMode, currentCustomerData, setEditTriggered }) {
    const [customerData, setCustomerData] = useState(inEditMode ? currentCustomerData : {
        rollNumber: '',
        name: '',
        address: '',
        email: ''
    });

    const [emailError, setEmailError] = useState('');
    const [rollNumberError, setRollNumberError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        let updatedValue = value;

        if (name === 'email') {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(value)) {
                setEmailError('Invalid email format');
            } else {
                setEmailError('');
            }
        }

        if (name === 'rollNumber') {
            const numericPattern = /^[0-9]*$/;
            if (!numericPattern.test(value)) {
                setRollNumberError('Customer number must contain only numbers');
            } else {
                setRollNumberError('');
            }
        }

        setCustomerData(prevData => ({ ...prevData, [name]: updatedValue }));
    }

    const onAddCustomer = () => {
        if (inEditMode) {
            setCustomers(prevCustomers => {
                const index = prevCustomers.findIndex(Customer => Customer.rollNumber === currentCustomerData.rollNumber);
                prevCustomers[index] = customerData;
                return [...prevCustomers];
            })

            setEditTriggered(false);
            return;
        }

        setCustomers(prevCustomers => (prevCustomers.concat(customerData)))
    }

    return (
        <div>
            <div>
                <h1>{inEditMode ? 'Update Customer Data' : 'Add a Customer'}</h1>
            </div>
            <div className='inputData'>
                <TextField className='margin-right' required id="outlined-basic" label="Name" variant="outlined" name='name' onChange={handleChange} value={customerData.name} />
                <TextField className='margin-right' required id="outlined-basic" label="Customer Number" variant="outlined" name='rollNumber' onChange={handleChange} value={customerData.rollNumber} error={!!rollNumberError} helperText={rollNumberError} />
            </div>
            <div className='inputData'>
                <TextField className='margin-right' required id="outlined-basic" label="Address" variant="outlined" name='address' onChange={handleChange} value={customerData.address} />
                <TextField className='margin-right' required id="outlined-basic" label="Email" variant="outlined" name='email' onChange={handleChange} value={customerData.email} error={!!emailError} helperText={emailError} />
            </div>
            <div className='addButton'>
                <Button variant="contained" onClick={onAddCustomer}>{inEditMode ? 'Update Details' : 'Add Customer'}</Button>
            </div>
        </div>
    );
}

export default AddCustomer;


