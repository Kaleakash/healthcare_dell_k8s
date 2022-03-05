import {Component} from 'react'
import axios from 'axios';
class UpdateMedicine extends Component {
    constructor(props){
        super(props);
        this.state = {medicine:{},flag:false,msg:""};
    }
    componentDidMount() {
        console.log(this.props.match.params);
        let pid = this.props.match.params.pid;
        axios.get(process.env.REACT_APP_IP_ADDRESS+`/api/admin/getMedicineById/${pid}`).then(result=> {
            if(result.status==200){
                this.setState({medicine:result.data,flag:true});
            }
            console.log(result)
        }).catch(error=> {
        console.log(error)
        })
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        let updateMedicine = this.state.medicine;
        axios.put(process.env.REACT_APP_IP_ADDRESS+`/api/admin/updateMedicine`,updateMedicine).then(result=> {
            if(result.status==200){
               this.setState({msg:result.data});
            }
            console.log(result)
        }).catch(error=> {
        console.log(error)
        })
    }
    render() {
        if(this.state.flag){
            return(
                <div className="container">
                <form onSubmit={this.handleSubmit} className="form-group">
                <div className="row">
                    <div className="col-md-4"><h2>Update Medicine Details</h2></div>
                </div>
                <div className="row">
                    <div className="col-md-4"><label>Medicine Id</label></div>
                    <div className="col-md-4"><input type="text" defaultValue={this.state.medicine.mid} 
                name="medicine.mid" 
                onChange={this.handleChange} readOnly className="form-control"/></div>
                </div>
                

                <div className="row">
                    <div className="col-md-4"><label>Company Name</label></div>
                    <div className="col-md-4">
                    <input type="text" value={this.state.medicine.medicinename} name="medicine.medicinename" 
                onChange={(event)=> this.setState(prevState => (prevState.product.medicinename = event.target.value))}
                    className="form-control"/></div>
                </div>

                <div className="row">
                    <div className="col-md-4"><label>Company Name</label></div>
                    <div className="col-md-4">
                    <input type="text" value={this.state.medicine.companyname} name="medicine.price" 
                onChange={(event)=> this.setState(prevState => (prevState.medicine.companyname = event.target.value))}
                    className="form-control"/></div>
                </div>  

                <div className="row">
                    <div className="col-md-4"><label>Medicine Price</label></div>
                    <div className="col-md-4">
                    <input type="text" value={this.state.medicine.price} name="medicine.price" 
                onChange={(event)=> this.setState(prevState => (prevState.medicine.price = event.target.value))}
                    className="form-control"/></div>
                </div>

                <div className="row">
                    <div className="col-md-4"><label>Medicine Quantity</label></div>
                    <div className="col-md-4">
                    <input type="text" value={this.state.medicine.quantity} name="medicine.quantity" 
                onChange={(event)=> this.setState(prevState => (prevState.medicine.quantity = event.target.value))}
                className="form-control"/></div>
                </div>

                <div className="row">
                    <div className="col-md-4"><label>Expiry Date</label></div>
                    <div className="col-md-4">
                    <input type="date" value={this.state.medicine.expireDate} name="medicine.expireDate" 
                onChange={(event)=> this.setState(prevState => (prevState.medicine.expireDate = event.target.value))}
                className="form-control"/></div>
                </div>    

                <div className="row">
                    <div className="col-md-4">
                        <input type="submit" value="Update medicine" className="btn btn-success"/> 
                    </div>
                </div>
                </form>
                <span style={{'color':'red'}}>{this.state.msg}</span>
                
                </div>
            )
        }else {
            return null;
        }
        
    }
}

export default UpdateMedicine;