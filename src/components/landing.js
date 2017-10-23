import React, { Component } from 'react';
import QuoteForm from './quote_form';
import QuoteList from './quote_list';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <QuoteForm />
        <QuoteList />
      </div>
    );
  }
}
