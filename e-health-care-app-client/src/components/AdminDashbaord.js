import {Component} from 'react'
import '../styles.css'
import {Link, Route, Switch} from 'react-router-dom'
import AddMedicine from './AddMedicine';
import GenerateReport from './GenerateReport';
import DisplayMedicine from './DisplayMedicine';
import UpdateMedicine from './UpdateMedicine';

class AdminDashboards extends Component {
constructor(props){
    super(props);
}

    render(){
        console.log(this.props.match.url)
        return(
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                <h2>Welcome to Admin Page</h2>
                <Link to={`${this.props.match.url}/addMedicine`}>Add Medicine</Link>
                <Link to={`${this.props.match.url}/displayMedicine`}>Display Medicine</Link>
                <Link to={`${this.props.match.url}/generateReport`}>Generate Report</Link>
                <Link to="/logout">Logout</Link>
                </div>
                <div className="col-md-12">
                <Switch>
                    <Route path={`${this.props.match.url}/addMedicine`} component={AddMedicine}></Route>
                    <Route path={`${this.props.match.url}/displayMedicine`} component={DisplayMedicine}></Route>
                    <Route path={`${this.props.match.url}/updateMedicine/:pid`} component={UpdateMedicine}></Route>
                    <Route path={`${this.props.match.url}/generateReport`} component={GenerateReport}></Route>
                </Switch>
                </div>
                </div>
            </div>
        )
    }
}

export default AdminDashboards
