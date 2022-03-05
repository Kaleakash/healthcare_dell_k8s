    import React from 'react';
    import MedicineItem from './MedicineItem';
    import axios from 'axios';
    import { Link} from 'react-router-dom';

    export default class MedicineList extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
        medicine: []
        }
      }
      componentDidMount() {
        axios.get(process.env.REACT_APP_IP_ADDRESS+"/api/medicine/getAllMedicine").then(result=> {
            if(result.status==200){
              console.log(result.data);
                this.setState({medicine:result.data,flag:true});
            }
        }).catch(error=> {
        console.log(error)
        })
      }
      render() {
        const { medicine } =  this.state;
        return (
          <div className=" container">
            <h3 className="card-title">List of Available Products</h3><hr/>
            <Link to="Checkout">
              <button className="btn btn-success float-right">Checkout</button>
              </Link>
            <Link to="Cart">
              <button className="btn btn-primary float-right" 
                  style={{  marginRight: "10px" }}>View Cart</button>
            </Link>
          {medicine.map((medicine, index) => <MedicineItem medicine={medicine} key={index}/>)}
          </div>
        );
      }
    }