import {Component} from 'react';
import '../styles.css';
import {Link} from 'react-router-dom';
class Landing extends Component {

    render(){
        return(
            <div className="loginLink" >
                <center>
            <Link to="/login">
            <img src="https://image.flaticon.com/icons/png/512/2170/2170147.png"
            width="200px" height="200px"/></Link>
            </center>
            </div>
        )
    }
}

export default Landing;