import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props);
        this.state = {
            vorname: "",
            nachname: "",
            alter: 1,
            nachricht: "",
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Vorname" onChange={(e) => this.setState({ vorname: e.target.value })} />
                <input placeholder="Nachnahme" onChange={(e) => this.setState({ nachname: e.target.value })} />
                <input placeholder="Alter" onChange={(e) => this.setState({ alter: e.target.value })} />
                <textarea placeholder="Nachricht" onChange={(e) => this.setState({ nachricht: e.target.value })} />
                <label htmlFor="isHappy">Bist du happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                <button type="button" onClick={() => {
                    this.myForm.reset();
                    this.userAdd = {
                        vorname: this.state.vorname,
                        nachname: this.state.nachname,
                        alter: this.state.alter,
                        nachricht: this.state.nachricht,
                        isHappy: this.state.isHappy
                    }
                    if(this.props.user) {
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd)
                }
                }><p>Hinzufügen</p></button>
            </form>
        )
    }
}

export default AddUser;
