import React from 'react'
import { Field, reduxForm } from 'redux-form'
debugger
const addMessageForm = (props) => {
    return( 
    <form onSubmit={props.handleSubmit} >
        <div>
            <Field name='addNewMessageText'  component='textarea' />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}

const addMessageReduxForm = reduxForm({form: 'message'})(addMessageForm)

export default addMessageReduxForm