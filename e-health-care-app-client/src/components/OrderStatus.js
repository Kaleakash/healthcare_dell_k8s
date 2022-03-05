import {Component} from 'react'
import axios from 'axios';
import Moment from 'moment';
class OrderStatus extends Component {
    constructor(props) {
        super(props);
          this.state = { orderInformation:[]}
        }
        componentDidMount() {
        let email =  sessionStorage.getItem("email");
        console.log("Id is "+email);
        axios.get(process.env.REACT_APP_IP_ADDRESS+`/api/Orders/orderDetails/${email}`).
        then(result=>{
            console.log(result.data)
            this.setState({orderInformation:result.data})
        }).
        catch(error=>console.log(error))
        }
    render() {
        let total = 0;
        let orderInfo = this.state.orderInformation.map(
            order=>
                <tr key={order.modid}>
                <td>{order.modid}</td>
                <td>{order.orderid}</td>
                <td>{order.mid}</td>
                <td>{order.medicinename}</td>
                <td>{Moment(order.orderDate).format('DD-MM-YYYY HH:mm')}</td>
                
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.quantity*order.price}</td>
                 </tr>
             )
        return(
            <div>
                <h2>Order Status Details</h2>
               <table border="1" className="table table-striped">
                     <thead>
                     <tr>
                         <th>Medicine Order Id</th>
                         <th>Order Id</th>
                         <th>Medicine Id</th>
                         <th>Medicine Name</th>
                         <th>Order Date</th>
                         <th>Price</th>
                         <th>Quantity</th>
                         <th>Sub Total</th>
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

export default OrderStatus;