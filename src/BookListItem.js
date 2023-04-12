import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import CommentList from './CommentList';


class MyBookCard extends Component {
  state = {
    comments: []

  }




  render(){
  return (
   
    <Card className="col-md-4">
      <Card.Img variant="top" src={this.props.item.img} />
      <Card.Body>
        <Card.Title>{this.props.item.title}</Card.Title>
        <Card.Text>
         {this.props.item.category} - ${this.props.item.price} 
          <CommentList comments={this.state.comments} />
        </Card.Text>
        <CommentList comments={this.state.comments} />
      </Card.Body>
    </Card>
  )
}
/*
need to get authorization code from link in assignment
*/
  componentDidMount = async () => {
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookInfo.asin, {
       headers: {'Authorizaton': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFjMzg4N2E0YmFhODAwMTNlODQ5NTgiLCJpYXQiOjE2ODA5NjMxNjksImV4cCI6MTY4MjE3Mjc2OX0.KT5AEy-tUYRLPopX-w-DHrxiUaXq3pGHzrOHJzAFg3Y"
      }
      })

      const retrievedComments = await resp.json();
      this.setState({
          comments: retrievedComments
      })

      

  }


}
export default MyBookCard;