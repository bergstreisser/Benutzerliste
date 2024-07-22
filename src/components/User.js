import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {

    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp className="delete-icon" />
                <IoHammerSharp className="edit-icon" />
                <h3>{this.props.user.vorname} {this.props.user.nachnahme}</h3>
                <p>{this.props.user.alter}</p>
                <b>{this.props.user.isHappy ? "Suppi..." : "traurig..."}</b>
            </div>
        )
    }
}

export default User;