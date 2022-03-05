import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CartItem from './CartItem';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { medicine: [], total: 0 }
  }

  componentDidMount() {
    let cart = localStorage.getItem('cart');
    console.log(cart);
    if (!cart) return; 
  axios.post(process.env.REACT_APP_IP_ADDRESS+"/api/cart/getMedicine",JSON.parse(cart)).then(result=> {
      if(result.status==200){
        let total = 0;
        let medicine = result.data;
        for (var i = 0; i < medicine.length; i++) {
              total += medicine[i].price * medicine[i].quantity;
            }
            this.setState({ medicine, total });
      }
  }).catch(error=> {
  console.log(error)
  })
   
  }
  removeFromCart = (medicineItem) => {
    let medicine = this.state.medicine.filter((item) => item.mid !== medicineItem.mid);
    console.log(medicine);
    let cart = JSON.parse(localStorage.getItem('cart'));
    delete cart[medicineItem.mid.toString()];
    //localStorage.removeItem("cart");
    localStorage.setItem('cart', JSON.stringify(cart));
    let total = this.state.total - (medicineItem.quantity * medicineItem.price) 
    this.setState({medicine, total});
  }
  clearCart = () => {
    localStorage.removeItem('cart');
    this.setState({medicine: []});
  }
  render() {
    const { medicine, total } =  this.state;
    return (
      <div className=" container">
        <h3 className="card-title">Cart</h3><hr/>
        {
          medicine.map((medicine, index) => 
            <CartItem medicine={medicine} remove={this.removeFromCart} key={index}/>)
        } 
        <hr/>
        { medicine.length ? 
          <div><h4>
            <div style={{'color':'gray','font-size':'25px','text-Align':'center'}}>
            <small>Total Amount: </small>
            <span className="float-right text-primary">{total}</span>
            </div>
          </h4><hr/></div>: ''}
        { !medicine.length ?<h3 className="text-warning">No item on the cart</h3>: ''}
        <Link to="Checkout">
            <button className="btn btn-success float-right">Checkout</button></Link>
        <button className="btn btn-danger float-right" onClick={this.clearCart} 
            style={{ marginRight: "10px" }}>Clear Cart</button>
        <Link to="MedicineList">
            <button className="btn btn-success float-right">Continue Shopping</button></Link>    
      </div>
    );
  }
}