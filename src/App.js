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
import Profile from './About';
import AddBook from './components/Add_Book';
import ManegeBooks from './components/ManegeBooks';

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
            <Route 
              exact path="/About"
              element={<Profile />}
              
            >

            </Route>
            <Route 
              exact path="/AddBook"
              element={<AddBook />}
              
            >

            </Route>
            <Route 
              exact path="/DeleteBook"
              element={<ManegeBooks />}
              
            >

            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;