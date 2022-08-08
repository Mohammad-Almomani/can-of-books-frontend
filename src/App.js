import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LogInOut from './components/Auth0Provider';
import UserRender from './components/Profile';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
          <Route 
              exact path="/"
              element={<BestBooks />}
            >
               </Route>
            <Route 
              exact path="/Profile"
              element={<UserRender />}
            >
              
            </Route>
            <Route 
              exact path="/Login"
              element={<LogInOut />}
              
            >
              
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;