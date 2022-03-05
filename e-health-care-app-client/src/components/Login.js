import {Component} from 'react'
import { Link } from 'react-router-dom';
import '../styles.css'
import axios from 'axios';

class Login extends Component {
constructor(props){
    super(props);
    this.state = {loginField:{},message:""}
}

    checkCredential=(event) => {
        event.preventDefault();
        let loginField = this.state.loginField;
        if(this.state.loginField.type==="admin"){
            axios.post(process.env.REACT_APP_IP_ADDRESS+"/api/admin/login",loginField).then(result=> {
            if(result.status==200){
                    this.setState({message:"Login Done Successfully"})
                    this.props.history.push("adminDashboard");
                    }
            }).catch(error=> {
                this.setState({message:"Invalid details"})
            })


        } if(this.state.loginField.type==="user"){
            console.log(this.state)
            axios.post(process.env.REACT_APP_IP_ADDRESS+"/api/user/login",loginField).then(result=> {
                          if(result.status==200){
                              this.setState({message:"Login Done Successfully"})
                              this.props.history.push(`userDashboard/${loginField.email}`);
                          }
            }).catch(error=> {
                this.setState({message:"Invalid details"})
            })    
         }
        
        
    }
    handleChange=(event)=> {
        let loginField = this.state.loginField;
        loginField[event.target.name]=event.target.value;
        this.setState({loginField:loginField});
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.checkCredential} className="form-group">
                <fieldset>
                <div className="row">
                        <div className="col-md-4"><h2>Login Page</h2></div>
                </div>        
                <div className="row" >
                <div className="col-md-2"><label>Email</label></div>
                <div className="col-md-2"><input type="text" name="email" size="10" 
                onChange={this.handleChange} className="form-control" required/></div>
                </div>
                <div className="row">
                <div className="col-md-2"><label><label>Password</label></label></div>
                <div className="col-md-2"><input type="Password" name="password" onChange={this.handleChange} 
                className="form-control" required/></div>
                </div>

                <div className="row">
                    <div className="col-md-4"><label>Type Of Login</label></div>
                </div>
                <div className="row">
                <div className="col-md-4">
                <input type="radio" value="user" name="type" onChange={this.handleChange}  className="form-check-input "/>
                <label>User</label>
                <input type="radio" value="admin" name="type" onChange={this.handleChange} className="form-check-input "/>
                <label>Admin</label>
                </div>
                </div>

                 <div className="row">
                    <div className="col-md-4">
                        <input type="submit" value="Sign In!" className="btn btn-success"/>
                        <input type="reset" value="Reset" className="btn btn-warning"/>
                    </div>
                 </div>
                 </fieldset>
                 <div className="row">
                    <div className="col-md-4">
                    <Link to="userSignUp" className="link-primary">
                <img src="https://st.depositphotos.com/1823785/4664/i/950/depositphotos_46647307-stock-photo-hands-holding-sign-up.jpg" width="130" height="30"/>
                    </Link><br/>
                    </div>
                 </div>
                </form>

                <span style={{'color':'red'}}>{this.state.message}</span>
            </div>
        )
    }
}

export default Login;