import React from "react"
import User from "./User";

class Users extends React.Component {

    render() {
        if (this.props.users.length > 0) {
            return (
                <div>
                    {this.props.users.map((user) => (
                        <User
                            onEdit={this.props.onEdit}
                            onDelete={this.props.onDelete}
                            key={user.id}
                            user={user}
                        />))}
                </div>
            )
        } else {
            return (
                <div className="user">
                    <h3>{"Die Benutzerliste ist leer..."}</h3>
                </div>
            )
        }

    }
}

export default Users;
