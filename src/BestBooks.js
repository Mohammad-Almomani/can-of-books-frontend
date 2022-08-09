import axios from 'axios';
import React from 'react';
import background from './components/books.jpg';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    const res = await axios.get(`${process.env.REACT_APP_RES_LINK}/books`);
    this.setState({ books: res.data });
    console.log(this.state);
  }


  componentDidMount() {
    console.log("inside the componentDidMount");
    this.getBooks();
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2 style={{textAlign: 'center'}}>Your Books Library</h2>

        {this.state.books.length ? (
           <Carousel style={{margin: '50px 10%'}}>
            {
              this.state.books.map(bb=>{ 
                return(
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={background}
               alt={bb.title}
             />
             <Carousel.Caption style={{backgroundColor: 'darkgray'}}>
               <h3>{bb.title}</h3>
               <p>{bb.description}</p>
               <p>{bb.status}</p>
             </Carousel.Caption>
           </Carousel.Item>
                )})
            }
         </Carousel>
          
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;