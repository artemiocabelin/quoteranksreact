import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { createQuote } from '../actions';

class QuoteForm extends Component {


  renderTextAreaField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
      
    return (
        <div className="form-group">
            <textarea className="form-control" placeholder="Write your quote here" {...field.input}></textarea>
            <div className="text-help">
                {touched ? error : ''}
            </div>
        </div>
        
    );
  }

  renderInputField(field) {
    const { meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
      
    return (
        <div className="form-group">
            <label>Author</label>
            <input className="form-control" type="text" placeholder="Author" {...field.input} />
            <div className="text-help">
                {touched ? error : ''}
            </div>
        </div>
        
    );
  }

  onSubmit(values) {
      this.props.createQuote(values);
      this.props.dispatch(reset('QuoteForm'));
  }
    
  render() {
    const { handleSubmit } = this.props;
      
    return (
      <div>
          <h1>Add a Quote</h1>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field name="quote" component={this.renderTextAreaField}></Field>
              <Field name="author" component={this.renderInputField}></Field>
              <button className="btn btn-default">Add Quote</button>
          </form>
      </div>
    );
  }
}

function validate(values) {
    const errors = {}

    if(!values.quote) {
        errors.quote= "Quote is required";
    }
    if(!values.author) {
        errors.author= "Author is required";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'QuoteForm'
})(
    connect(null, { createQuote })(QuoteForm)
);