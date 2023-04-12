import React, { Component } from 'react';


class CommentListItem extends Component {
    render() {
        return (
           <li>
                {this.props.comment.rate} - {this.props.comment.commment}
           </li>
        );
    }
}

export default CommentListItem;