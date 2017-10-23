import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVote } from '../actions';
import { downVote } from '../actions';
import { deleteQuote } from '../actions';

class Quote extends Component {
  addVote(vote) {
    this.props.upVote(vote);
  }

  subtractVote(vote) {
    this.props.downVote(vote);
  }

  deleteQuote(idx) {
    this.props.deleteQuote(idx);
  }
    
  render() {
    const { msg, author, votes, idx } = this.props;

    return (
        <div className="col-md-12 quote-box">
            <div className="col-md-8">
                <p>"{msg}"</p>
                <p>- {author}</p>
            </div>
            <div className="col-md-1">
                <p>{votes}</p>
            </div>
            <div className="col-md-3">
                <button className="block btn btn-success" onClick={() => this.addVote(idx)}>Vote Up</button>
                <button className="block btn btn-danger" onClick={() => this.subtractVote(idx)}>Vote Down</button>
                <button className="block btn btn-default" onClick={() => this.deleteQuote(idx)}>Delete</button>
            </div>
        </div>
    );
  }
}

export default connect(null, { upVote, downVote, deleteQuote })(Quote);