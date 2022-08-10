import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RouteIf from './components/Routs';


class App extends React.Component {
  
  Islog = () =>{
    return true
  }



  render() {
    return (
      <>
        <RouteIf />
      </>
    )
  }
}

export default App;