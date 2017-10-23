import _ from 'lodash';
import React, { Component } from 'react';
import Quote from './quote';
import { connect } from 'react-redux';

class QuoteList extends Component {
  renderQuote(quote, key) {
    return (
        <Quote key={key} idx={key} msg={quote.quote} author={quote.author} votes={quote.votes} />
    );
  }
    
  render() {
    return (
      <div>
          <h1>Quotes List</h1>
          {_.map(this.props.quotes, this.renderQuote)}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        quotes: state.quotes
    };
}

export default connect(mapStateToProps)(QuoteList);