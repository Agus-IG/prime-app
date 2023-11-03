import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React from 'react'

function Form() {
    return (
        <div className='form'>
            <form action="">
                <span className="p-float-label">
                    <InputText id="username" />
                    <label htmlFor="username">Username</label>
                </span>
                <button label='Submit' type='submit' icon='pi pi-check'></button>
            </form>
        </div>
    )
}

export default Form