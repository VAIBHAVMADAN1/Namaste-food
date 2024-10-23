import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name:'Moshe',
                location:'Cannanite',
                contact:'8934838324'
            }
        }
    }

    render() {
        const {name, location, contact} = this.state.userInfo;
        // console.log(name, location, contact)
        return <div>
            <img src="https://avatars.githubusercontent.com/u/144939273?v=4" alt="profile picture"></img>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
        </div>
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/VAIBHAVMADAN1");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        // console.log("Component did update");
    }
    componentWillUnmount() {
        // clearInterval(this.t)
    }
}


export default UserClass;


// Mounting cycle-
    // Constructor(dummy)
    // Render (dummy)
    //      <html> dummy
    // componentDidMount
    // api call
    // this.setState()
// Updating cycle-
    // render (api data)
    // <html> (new api data)
    // componentDidUpdate