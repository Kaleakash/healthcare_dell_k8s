import {Component} from 'react'
import axios from 'axios';
class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {user:{},msg:""}
    }
    componentDidMount() {
        let email = sessionStorage.getItem("email");
        axios.get(process.env.REACT_APP_IP_ADDRESS+`/api/user/findUser/${email}`).
        then(result=>{
            console.log(result.data)
                this.setState({user:result.data});
        }).catch(error=>console.log(error))
    }
    handleChange=(event)=> {
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        console.log(this.state.user);
        axios.put(process.env.REACT_APP_IP_ADDRESS+"/api/user/editUser",this.state.user).
        then(result=>{            
            this.setState({user:"","msg":result.data})
        }).catch(error=>console.log(error))
    }
    render() {
        return(
            <div className="container">
                
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-9"><h2>EditProfile Details</h2></div>
                </div>
                <div className="row">
                <div className="col-md-4"><label>First Name</label></div>
                    <div className="col-md-4">
                    <input type="text" name="user.fname" 
                    value={this.state.user.firstname} 
                    className="form-control"
                    /></div>
                </div>    

                <div className="row">
                <div className="col-md-4"><label>Email</label></div>
                    <div className="col-md-4">
                    <input type="text" name="user.email" 
                    value={this.state.user.email} 
                    className="form-control"
                    /></div>
                </div>   

                <div className="row">
                    <div className="col-md-4"><label>Password</label></div>
                    <div className="col-md-4">
                    <input type="password" value={this.state.user.password} name="user.password" 
                onChange={(event)=> this.setState(prevState => (prevState.user.password = event.target.value))}
                    className="form-control"/></div>
                </div>

                <div className="row">
                    <div className="col-md-4"><label>Phone Number</label></div>
                    <div className="col-md-4">
                    <input type="text" value={this.state.user.phonenumber} name="user.pnumber" 
                onChange={(event)=> this.setState(prevState => (prevState.user.phonenumber = event.target.value))}
                    className="form-control"/></div>
                </div>

                <div className="row">
                    <div className="col-md-4"><label>Address</label></div>
                    <div className="col-md-4">
                    <input type="text" value={this.state.user.address} name="user.address" 
                onChange={(event)=> this.setState(prevState => (prevState.user.address = event.target.value))}
                    className="form-control"/></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <input type="submit" value="Update Profile" className="btn btn-success"/>
                    </div>
                </div>
                <span style={{'color':'red'}}>{this.state.msg}</span>
                </form>
            </div>
        )
    }
}

export default EditProfile;