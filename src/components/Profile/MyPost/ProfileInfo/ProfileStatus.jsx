import React from 'react'

class ProfileStatus extends React.Component {

    statusInputRef = React.createRef()

    state = {
        editMode: false
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

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState) {
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