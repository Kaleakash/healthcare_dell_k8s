import {Component} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
class UserSignUp extends Component {
    constructor(props){
        super(props);
        this.state = {userField:{},message:""}
    }
    changeHandle=(event)=> {
        let userField = this.state.userField;
        userField[event.target.name]=event.target.value;
        this.setState({userField:userField});
       // console.log(this.state.userField)
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        console.log("Hello")
        let userField = this.state.userField;
    axios.post(process.env.REACT_APP_IP_ADDRESS+"/api/user/signUp",userField).then(result=> {
        if(result.status==200){
            this.setState({message:"Account Created successfully",userField:{}})
            
        }
    }).catch(error=> {
        console.log(error)
    })
    event.target.reset();
    }
    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="form-group">
                <div className="row">
                    <div className="col-md-8"><h2>UserSignUp Details</h2></div>
                </div>
                
                <div className="row">
                <div className="col-md-4"><label>First Name</label></div>
                <div className="col-md-4"><input type="text" name="firstname"  
                onChange={this.changeHandle}className="form-control" /></div>
                </div>

                <div className="row">
                <div className="col-md-4"><label>Last Name</label></div>
                <div className="col-md-4">
                <input type="text" name="lastname" onChange={this.changeHandle}
                className="form-control" /></div>
                </div>

                <div className="row">
                <div className="col-md-4"><label>Email</label></div>
                <div className="col-md-4">
                <input type="text" name="email" onChange={this.changeHandle}
                className="form-control" /></div>
                </div>

                <div className="row">
                <div className="col-md-4"><label>password</label></div>
                <div className="col-md-4">
                <input type="password" name="password" onChange={this.changeHandle}
                className="form-control" /></div>
                </div>

                <div className="row">
                <div className="col-md-4"><label>DataOfBirth</label></div>
                <div className="col-md-4">
                <input type="date" name="dob" onChange={this.changeHandle}
                className="form-control" /></div>
                </div>

                <div className="row">
                <div className="col-md-4"><label>Phone</label></div>
                <div className="col-md-4">
                <input type="text" name="phonenumber" onChange={this.changeHandle}
                className="form-control" /></div>
                </div>

                <div className="row">
                <div className="col-md-4"><label>Address</label></div>
                <div className="col-md-4">
                <textarea name="address" onChange={this.changeHandle} className="form-control">
                </textarea></div>
                </div>
                
                <div className="row">
                <div className="col-md-4">
                <input type="submit" value="Create Account" className="btn btn-success"/>
                </div>
                <div className="col-md-1">
                <input type="reset" value="Reset" className="btn btn-info"/>
                </div>
                </div>
                <div className="row">
            <div className="col-md-6"><Link to="/login" style={{'color':'black'}}>
            <img src="https://static3.depositphotos.com/1005574/198/v/950/depositphotos_1982796-stock-illustration-login-icon-button.jpg" width="200" height="40"/>
            </Link></div>
                </div>
                </form>
                <span style={{'color':'red'}}>{this.state.message}</span>
            </div>
        )
    }
}

export default UserSignUp;