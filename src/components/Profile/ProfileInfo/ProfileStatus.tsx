import React, { ChangeEvent } from 'react'

type PropsType ={
    status: string
    updateStatus: (ststus: str) => void
}

type StateType ={
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    statusInputRef = React.createRef()

    state = {
        editMode: false,
        status: ''
    }

    activateEditMode =() => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode 
                    ? <div><span onDoubleClick={this.activateEditMode} >Статус: {this.props.status}</span></div>
                    : <div><input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.deactivateEditMode} /></div>}
            </div>
        )
    }
}

export default ProfileStatus 