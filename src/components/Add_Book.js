import { Component } from "react";
import axios from "axios";
import AddForm from "./Form";
import swal from 'sweetalert';

export default class AddBook extends Component {

    createBook = async(e) => {
        e.preventDefault();
        const newBook = {
            "title": e.target.bookTitle.value,
            "description": e.target.bookDescription.value,
            "status": e.target.bookStatus.value
          }
          console.log(newBook)
          await axios.post('http://localhost:3001/books', {newBook});

        swal("Book added Successfully!", "click the button to continue!", "success");
        
    } 

    render(){
        return (
            <div style={{margin: "10px 30px"}}>
            <AddForm submitBook={this.createBook} />
            </div>
        )
    }
}