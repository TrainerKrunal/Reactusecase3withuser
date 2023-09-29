
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
// import AddUser from './NewComponents/AddUser';
// import NewUserList from './NewComponents/NewUserList';
// import AppNavBar from './AppNavbar';
import UserDetails from './Components/userdetails';
import UserList from './Components/userlist';
import EditUser from './Components/edituser';
import UserForm from './Components/userform';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AppNavBar/>
          <br/>
          <hr/>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/Createuser" component={UserForm}/>
              <Route path="/UserList" component={UserList}/>
              <Route path="/edit/:id" component={EditUser}/>
              <Route path="/view/:id" component={UserDetails}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
