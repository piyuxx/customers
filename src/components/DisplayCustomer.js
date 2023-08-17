import React, { useState } from 'react'
import { Card, Button } from "@mui/material";
import AddCustomer from './AddCustomer';

function DisplayCustomers({ Customers, setCustomers }) {


    const [editTriggered, setEditTriggered] = useState(false);
    const [CustomerDataToEdit, setCustomerDataToEdit] = useState({});

    const handleDelete = (rollNumber) => {
        const index = Customers.findIndex(Customer => Customer.rollNumber === rollNumber);

        setCustomers((prevCustomers => {
            prevCustomers.splice(index, 1);
            return [...prevCustomers];
        }))

    }

    return (
        <>
            <div>
                <h1>Customers Listing</h1>
            </div>
            {editTriggered ? <div>
                <AddCustomer setCustomers={setCustomers} inEditMode={true} currentCustomerData={CustomerDataToEdit} setEditTriggered={setEditTriggered} />
            </div> :
                <div>
                    {Customers.map(Customer => (
                        <Card variant='outlined' className='display-card'>
                            <div className='card'>
                                <h3>Name: {Customer.name}</h3>
                                <p>Customer No.: {Customer.rollNumber}</p>
                                <p>Address: {Customer.address}</p>
                                <p>Email: {Customer.email}</p>
                            </div>
                            <div className='delete'>
                                <Button variant="outlined" color="error" onClick={() => handleDelete(Customer.rollNumber)}>
                                    Delete
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => {
                                    setCustomerDataToEdit(Customer);
                                    setEditTriggered(true)
                                }}>
                                    Edit
                                </Button>
                            </div>
                        </Card>))}

                </div>}
        </>

    )
}


export default DisplayCustomers;