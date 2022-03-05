import axios from 'axios';
import {Component} from 'react'
class AddMedicine extends Component {
constructor(props) {
    super(props);
    this.state= {medicineFields:{}}
}

changeHandle=(event)=> {
    let medicineFields = this.state.medicineFields;
    medicineFields[event.target.name]=event.target.value;
    this.setState({medicineFields:medicineFields});
  
}
handleSubmit=(event)=> {
    event.preventDefault();
    let medicineFields = this.state.medicineFields;
axios.post(process.env.REACT_APP_IP_ADDRESS+"/api/admin/addMedicine",medicineFields).then(result=> {
    if(result.status==200){
        this.setState({message:"Medicine Details store successfully",medicineFields:{}})       
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
                <div className="col-md-8"><h2>Add Medicine Details</h2></div>
            </div>
            <div className="row">
                <div className="col-md-4"><label>Medicine Name</label></div>
                <div className="col-md-4"><input type="text" name="medicinename"  
                onChange={this.changeHandle} className="form-control"/></div>
            </div>   
            
            <div className="row">
                <div className="col-md-4"><label>Company Name</label></div>
                <div className="col-md-4"><input type="text" name="companyname"  
                onChange={this.changeHandle} className="form-control"/></div>
            </div>

            <div className="row">
                <div className="col-md-4"><label>Price</label></div>
                <div className="col-md-4">
                <input type="text" name="price" onChange={this.changeHandle}
                className="form-control"/></div>
            </div>
            
            <div className="row">
                <div className="col-md-4"><label>Quantity</label></div>
                <div className="col-md-4">
                <input type="text" name="quantity" onChange={this.changeHandle}
                className="form-control"/></div>
            </div>

            <div className="row">
                <div className="col-md-4"><label>Uses</label></div>
                <div className="col-md-4">
                <input type="text" name="uses" onChange={this.changeHandle}
                className="form-control"/></div>
            </div>

            <div className="row">
                <div className="col-md-4"><label>Expire Date</label></div>
                <div className="col-md-4">
                <input type="date" name="expiredate" onChange={this.changeHandle}
                className="form-control"/></div>
            </div>

            <div className="row">
                <div className="col-md-4"><label>Image URL</label></div>
                <div className="col-md-4">
                <input type="url" name="imageUrl" onChange={this.changeHandle}
                className="form-control"/></div>
            </div>
            
            <div className="row">
                <div className="col-md-4">
                <input type="submit" value="Add Medicine" className="btn btn-success"/>
                </div>
                <div className="col-md-3">
                <input type="reset" value="Reset" className="btn btn-info"/> 
                </div>
            </div>
                
            </form>
            <span style={{'color':'red'}}>{this.state.message}</span>
        </div>
    )
}
}

export default AddMedicine;