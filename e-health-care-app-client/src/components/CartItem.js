import React from 'react';

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1}
  }

  render(){
    const { medicine } = this.props;
    return (
      <div className="card" style={{ marginBottom: "10px"}}>
        <div className="card-body">
          <div className="card-title" style={{'color':'gray','font-size':'25px','text-align':'left'}}>
          Medicine Name : {medicine.medicinename}, 
          Price: {medicine.price} Quantity 
          Quantity: {medicine.quantity} = {medicine.price*medicine.quantity}
          <button className="btn btn-sm btn-warning" 
          onClick={() => this.props.remove(medicine)}>Remove from cart</button>
          </div>             
        </div>
      </div>
     )
  }
}