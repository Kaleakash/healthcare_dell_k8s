import {Component} from 'react'
import axios from 'axios';
import Moment from 'moment';
class GenerateReport extends Component {


    constructor(props) {
        super(props);
          this.state = { orderInformation:[],searchType:"",searchValue:""}
        }
        loadData=()=> {
            axios.get(process.env.REACT_APP_IP_ADDRESS+`/api/Orders/allOrdersDetails`).
        then(result=>{
            console.log(result.data)
            this.setState({orderInformation:result.data})
        }).
        catch(error=>console.log(error))
        }
        componentDidMount() {
            this.loadData();
        }
        
        handleSearch=(event)=> {
            this.setState({[event.target.name]:event.target.value});
        }

        generateReport=(event)=> {
            console.log(this.state.searchType+" "+this.state.searchValue);
            if(this.state.searchType=="Medicine"){
                let orderInformation = this.state.orderInformation.filter(order=>order.medicinename.includes(this.state.searchValue));
                this.setState({orderInformation});
            }else if(this.state.searchType=="EmailId"){
                let orderInformation = this.state.orderInformation.filter(order=>order.emailid.includes(this.state.searchValue));
                this.setState({orderInformation});
            }else if(this.state.searchType=="OrderDate"){
                let orderInformation = this.state.orderInformation.filter(order=>order.orderDate.toString().includes(this.state.searchValue));
                this.setState({orderInformation});
            }else if(this.state.searchType=="OrderId"){
                let orderInformation = this.state.orderInformation.filter(order=>order.orderId.includes(this.state.searchValue));
                this.setState({orderInformation});
            }
        }
    render() {
        let orderInfo = this.state.orderInformation.map(
            order=>
                <tr key={order.modid}>
                <td>{order.modid}</td>
                <td>{order.emailid}</td>
                <td>{order.mid}</td>
                <td>{order.medicinename}</td>
                <td>{order.orderid}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>{Moment(order.orderDate).format('DD-MM-YYYY HH:mm')}</td>
                </tr>
            )
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <h2>Reports</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1">
                <input type="text" name="searchValue" onChange={this.handleSearch}/>
                </div>
                <div className="col-md-4">
                <select name="searchType" onChange={this.handleSearch}>
                    <option>--Select--</option>
                    <option value="Medicine">Medicine</option>
                    <option value="EmailId">Email Id</option>
                    <option value="OrderDate">Order Date</option>
                    <option value="OrderId">OrderId</option>
                </select>
            </div>
            </div>
            <div>
                <div className="col-md-4">
                <input type="button" value="Generate Report" onClick={this.generateReport} className="btn btn-success"/>
                <input type="button" value="Reset" onClick={this.loadData} className="btn btn-info"/>
                </div>
            </div>
                <table border="1" className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Medicine Order Id</th>
                        <th>Email Id</th>
                        <th>Medicine Id</th>
                        <th>Medicine name</th>
                        <th>Order Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Order Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orderInfo}
                    </tbody>
                </table>
            
            </div>
        )
    }
}

export default GenerateReport;