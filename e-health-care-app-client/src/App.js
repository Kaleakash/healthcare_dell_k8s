import './styles.css';
import {Route,Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import {Component} from 'react'
import Login from './components/Login';
import AdminDashboards from './components/AdminDashbaord';
import UserDashboards from './components/UserDashboard';
import Landing from './components/Landing';
import UserSignUp from './components/UserSignUp';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {loginIn:"login"};
  }

componentDidMount() {
  console.log(this.props)
}
handle=(data)=> {
  this.setState({loginIn:data});
}
  render(){
    return(
      <div className="Home">
        <br/><br/>
         <h2>E-Health Care Application</h2>
      <div>
      <Switch>
         <Route path="/login" component={()=><Login handle={this.handle} history={this.props.history} />} />
         <Route path="/adminDashboard" component={AdminDashboards}></Route>  
         <Route path="/userDashboard/:email" component={UserDashboards}></Route>
         <Route path="/userSignUp" component={UserSignUp}></Route>
         <Route path="/" component={Landing}></Route>
      </Switch>
      </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>( {
  flag : state
})
const mapActionsToProps = {
  //login : loginIn
}
//export default App;
export default  withRouter(App)

