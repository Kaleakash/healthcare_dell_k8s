import {Component} from 'react'
import OrderStatus from './OrderStatus';
import EditProfile from './EditProfile';
import Funds from './Funds';
import {Link, Route, Switch} from 'react-router-dom'
import MedicineList from './MedicineList';
import Cart from './Cart';
import Checkout from './Checkout';

class UserDashboards extends Component {
constructor(props){
    super(props);
}
logout=()=>{
    console.log("called..")
    localStorage.removeItem("cart");
    this.props.history.push("/logout");
}
render(){

    //localStorage.removeItem("cart");
    let email = this.props.match.params.email;
    sessionStorage.setItem("email",email);
    return(
        <div className="container">
            <div className="container App">
            <Link to={`${this.props.match.url}/OrderStatus`}>Order Status</Link>
            <Link to={`${this.props.match.url}/EditProfile`}>Edit Profile</Link>
            <Link to={`${this.props.match.url}/Funds`}>Funds</Link>
            <Link to={`${this.props.match.url}/MedicineList`}>Medicine List</Link>
            <Link onClick={this.logout}>Logout</Link>
            <hr/>
            <h2>Welcome to User Page {email}</h2>
            </div>
            <Switch>
                <Route path={`${this.props.match.url}/OrderStatus`} component={OrderStatus}></Route>
                <Route path={`${this.props.match.url}/EditProfile`} component={EditProfile}></Route>
                <Route path={`${this.props.match.url}/Funds`} component={Funds}></Route>
                <Route path={`${this.props.match.url}/MedicineList`} component={MedicineList}></Route>
                <Route path={`${this.props.match.url}/Checkout`} component={Checkout}></Route>
                <Route path={`${this.props.match.url}/Cart`} component={Cart}></Route>
            </Switch>
        </div>
    )
}
}

export default UserDashboards;