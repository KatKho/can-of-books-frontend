import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthButtons from './components/auth/AuthButtons';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function ConditionalBooks() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ?  <BestBooks /> : <p>Please Log In</p>;
}

function ConditionalProfile() {
  const { isAuthenticated, user} = useAuth0();
  return isAuthenticated ?  <Profile user = {user} /> : <p>Please Log In</p>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    return (
      <>
        <Router>
          <Header >
           <AuthButtons />  
           </Header>
          <Routes>
            <Route 
              exact path="/"
              element={<ConditionalBooks />}
            >
            </Route>
            <Route 
              exact path="/About"
              element={<About />}
            >
            </Route>
            <Route 
              exact path="/Profile"
              element={<ConditionalProfile />}
            >
            </Route>
          </Routes>
          {/* <Footer /> */}
        </Router>
      </>
    )
  }
}

export default App;
