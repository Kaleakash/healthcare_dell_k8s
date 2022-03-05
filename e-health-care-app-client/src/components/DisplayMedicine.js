import React, { Component } from 'react'
import axios from 'axios';
import '../index.css'
export default class DisplayMedicine extends Component {
    constructor(props) {
        super(props);
        this.state = {medicine:[],flag:false}
    }
    componentDidMount() {
        this.displayAllMedicineDetails();
    }
    displayAllMedicineDetails = ()=> {
        axios.get(process.env.REACT_APP_IP_ADDRESS+"/api/admin/getAllMedicine").then(result=> {
            if(result.status==200){
                this.setState({medicine:result.data,flag:true});
            }
        }).catch(error=> {
        console.log(error)
        })
    }
    deleteMedicine=(mid)=> {
        axios.delete(process.env.REACT_APP_IP_ADDRESS+"/api/admin/deleteMedicineById/"+mid).then(result=> {
            if(result.status==200){
                console.log("Medicine deleted successfully..")
                this.displayAllMedicineDetails();
            }
        }).catch(error=> {
        console.log(error)
        })        
    }
    updateMedicine= (pid)=> {
        this.props.history.push('updateMedicine/'+pid);
    }
    render() {
        if(this.state.flag){
            return(
                this.state.medicine.map(m=>
                        <div className="row imageDiv">
                            <div className="col-4 colDivImage">
                            <img src={m.imageUrl} width="100px" height="100px"/><br/>
                            Medicine Name <b>{m.medicinename}</b><br/>
                            Company Name <b>{m.companyname}</b><br/>
                            PPrice <b>{m.price}</b><br/>
                            Quantity <b>{m.quantity}</b><br/>
<input type="button" value="Detele Product" onClick={()=>this.deleteMedicine(m.mid)} className="btn btn-success"/>
<input type="button" value="Update Product" onClick={()=>this.updateMedicine(m.mid)} className="btn btn-success"/>
                            </div>
                        </div>)
            )
        }else {
            return <div>Loading...</div>
        }

    }
}
