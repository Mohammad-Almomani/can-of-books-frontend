import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Mohammad from './components/mohammad.jpg';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return(

      <div style={{display: 'flex', justifyContent:'center', margin: '20px 0px'}}>
               
      <Card style={{ width: '20rem' }}>
<Card.Img variant="top" src={Mohammad} alt="Mohammad Almomani"/>
<Card.Body>
<Card.Title>Website Owner</Card.Title>

</Card.Body>
<ListGroup className="list-group-flush">
<ListGroup.Item>Name: Mohammad Almomani</ListGroup.Item>
<ListGroup.Item>Contact Email: Moh.moma.mmm@gmail.com</ListGroup.Item>
{/* <ListGroup.Item>Joind: {user.updated_at.slice(0,10)}</ListGroup.Item> */}
</ListGroup>
</Card>
</div>

    ) 
  }
};

export default Profile;