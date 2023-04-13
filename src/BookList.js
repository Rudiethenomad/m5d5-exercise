//import React from 'react';
import React, { Component } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import books from "./scifi.json";
import BookListItem from "./BookListItem";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import { Fragment } from 'react';
import userEvent from '@testing-library/user-event';

//import { useState, useEffect } from "react";



let myInit = {method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
              mode: 'cors',
              cache: 'default' }; 


let myRequest = new Request("./scifi.json", myInit);






class BookList extends Component {
  state = {
        books: []
  }
  componentDidMount = async () => {
    const resp = await fetch(myRequest, myInit)
    if(resp.ok){
        const books = await resp.json();
        console.log(books);
    }
        this.setState({
            books: books
          
        })
    
    }
    

    render(){
        return (
    
                
                <Fragment>
                <Row>
                     <MyNav 
                     placeholder="Search"
                     value={this.state.value}
                     onChange={(e)=> this.setStaate({ search: e.currentTarget.value.toLowerCase() })}
                     
                     />
                </Row>
                
                <Row>
                    {books.map((book) => 
                        <BookListItem item={book} />)
                        
                        
                        }
                </Row>
                <Row>
                    <MyFooter />
                </Row>
             </Fragment>
                   ) }
                    
       
          
        }


        
   
export default BookList;

