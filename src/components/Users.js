import React from "react"
import User from "./User";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.zustand = {
            users: [
                {
                    id: 1,
                    vorname: "Irene",
                    nachnahme: "Bergi",
                    alter: 45,
                    isHappy: false
                },
                {   
                    id: 2,
                    vorname: "Leon",
                    nachnahme: "Bergi",
                    alter: 20,
                    isHappy: true
                }
            ]
        }
    }

    render() {
        if (this.zustand.users.length > 0) {
            return (
                <div>
                    {this.zustand.users.map((user) => (<User key={user.id} user={user} />))}
                </div>
            )
        } else {
            return (
                <div className="user">
                    <h3>{"keine User vorhanden..."}</h3>
                </div>
            )
        }

    }
}

export default Users;
