import React from 'react';
import '../index.css'

    export default class MedicineItem extends React.Component {
      constructor(props) {
        super(props);
        this.state = {quantity: 1}
      }

      handleInputChange = event => 
          this.setState({[event.target.name]: event.target.value})

      addToCart = () => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
        let id = this.props.medicine.mid.toString();
        cart[id] = (cart[id] ? cart[id]: 0);
        let qty = cart[id] + parseInt(this.state.quantity);
        if (this.props.medicine.quantity < qty) {
          cart[id] = this.props.medicine.quantity; 
        } else {
          cart[id] = qty
        }
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      render(){
        const { medicine } = this.props;
        return (
         <div className="card" style={{ marginBottom: "10px"}}>
           <div className="row imageDiv">
          <div className="col-4 colDivImage">
           <div className="card-body">
             <h4 className="card-title">Medicine Name : {medicine.medicineName}</h4>
             <p className="card-text">Company Name : {medicine.companyName}</p>
             <h5 className="card-text">Price: &#8377;{medicine.price}Quantity:{medicine.quantity}</h5>
             <span className="card-text">
               <small>Available Quantity: </small>{medicine.available_quantity}
             </span>
             { medicine.quantity > 0 ?
              <div>

                <img src={medicine.imageUrl} width="100px" height="100px"/><br/>
                 <button className="btn btn-sm btn-warning float-right" 
                    onClick={this.addToCart}>Add to cart</button>
                 <input type="number" value={this.state.quantity} name="quantity" 
                    onChange={this.handleInputChange} className="float-right" 
                    style={{ width: "120px", marginRight: "10px", borderRadius: "3px"}}/>
              </div> : 
              <p className="text-danger">Medicine is out of stock </p>
            }
          </div>
        </div>
        </div>
        </div>
       )
     }
    }
