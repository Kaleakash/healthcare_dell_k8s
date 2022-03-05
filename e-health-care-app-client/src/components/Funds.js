import {Component} from 'react'
import axios from 'axios';
class Funds extends Component {
    constructor(props){
        super(props);
        this.state = {accounNumber:0,balanceAmount:0,amount:0,msg:""}
    }
    componentDidMount() {
         this.loadAccountDetail();
    }
    loadAccountDetail= ()=> {
        let email = sessionStorage.getItem("email");
        axios.get(process.env.REACT_APP_IP_ADDRESS+`/api/user/accountInfo/${email}`).
        then(result=>{
            this.setState({
                accounNumber:result.data.accnumber,
                balanceAmount:result.data.amount
            })
        }).catch(error=>console.log(error))
    }
    handleChange = (event)=> {
        this.setState({[event.target.name]:event.target.value})
    }
    addAmount=(event)=> {
        let accno = this.state.accounNumber;
        let amount = this.state.amount;
        axios.put(process.env.REACT_APP_IP_ADDRESS+"/api/user/addFunds",{"accnumber":accno,"amount":amount}).
        then(result=>{
            this.loadAccountDetail();
            this.setState({"msg":result.data})
        }).catch(error=>console.log(error))
    }
    render() {
        return(
            <div className="container">
                <div>
                    <div className="row">
                    <div className="col-md-4">
                    <h2>Funds Details</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                    <h4>Your Account Number is {this.state.accounNumber}<br/> 
                    and balance amount is {this.state.balanceAmount}</h4>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <h4>Add Amount</h4>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <input type="number" name="amount" onChange={this.handleChange} className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <input type="button" value="Add Amount" onClick={this.addAmount} className="btn btn-success"/>
                        </div>
                    </div>
                </div>
                <span style={{'color':'red'}}>{this.state.msg}</span>
            </div>
        )
    }
}

export default Funds;