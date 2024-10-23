import UserClass from "./UserClass";
import UserContext from "../utils/userContext";
// const About = () => {
//     return <>
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React web series</h2>
//             <User name={"Vaibhav"}></User>
//             <UserClass name={"Ramses the great"} location={"Egypt"}/>
//         </div>
//     </>
// }
import {Component} from "react";
class About extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <>
            <div>
                <h1>About</h1>
                <div>
                    Logged-in user
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React web series</h2>
                <UserClass name={"Ramses the great"} location={"Egypt"} />
            </div>
        </>
    }
    componentDidMount() {
    }
}


export default About;