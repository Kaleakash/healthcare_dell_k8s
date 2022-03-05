import React from 'react';
import {  Redirect, Link } from 'react-router-dom';
import axios from 'axios';
    export default class Checkout extends React.Component {
      constructor(props) {
      super(props);
        this.state = { products: [], total: 0 ,msg:""}
      }
      pay=()=> {
        localStorage.removeItem("cart");
        let products = this.state.products;
        let total = this.state.total;
        let email = sessionStorage.getItem("email");
        console.log(products)
        console.log(total)
        console.log(email);
        axios.post(process.env.REACT_APP_IP_ADDRESS+`/api/cart/placeOrder/${email}/${total}`,
        products).then(result=>{
          this.setState({"msg":result.data,products:[]})
        }).
        catch(error=>console.log(error))
      }
      componentDidMount() {
        let cart = localStorage.getItem('cart');
        console.log(cart);
        if (!cart) return; 
      axios.post(process.env.REACT_APP_IP_ADDRESS+"/api/cart/getMedicine",JSON.parse(cart)).then(result=> {
          if(result.status==200){
            let total = 0;
            let products = result.data;
            for (var i = 0; i < products.length; i++) {
                  total += products[i].price * products[i].quantity;
                }
                this.setState({ products, total });
          }
      }).catch(error=> {
      console.log(error)
      })
    }

    render(){
      const { products, total } =  this.state;
      return(

  <div className=" container">
          <h3 className="card-title">Checkout</h3><hr/>
          { products.map((product, index) => 
              <div key={index} style={{'color':'gray','font-size':'25px','text-align':'center'}}>
              <p>{product.pname} (Quantity: {product.quantity})
                 <span className="float-right text-primary"> {product.quantity * product.price}
              </span></p><hr/>
              </div>
          )} <hr/>
          { products.length ? 
          <div style={{'color':'gray','font-size':'25px','text-align':'center'}}>
            <h4>Total Amount:<span className="float-right text-primary">
                Rs{total}</span></h4><hr/></div>: ''}
          { !products.length ? <h3 className="text-warning">No item on the cart</h3>: ''}
          { products.length ? <button className="btn btn-success float-right" 
                onClick={this.pay}>Pay</button>: '' }
          <Link to="ProductList"><button className="btn btn-danger float-right" 
            style={{ marginRight: "10px" }}>Cancel</button></Link><br/><br/><br/>
          <span style={{'color':'red'}}>{this.state.msg}</span>
        </div>
        );

    }
      
    }