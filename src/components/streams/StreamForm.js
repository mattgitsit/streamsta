import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderFormInput = ({ input, placeholder, meta }) => {
    return (
      <div className={`field ${meta.touched && meta.error ? 'error' : null}`}>
        <input {...input} placeholder={placeholder} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="ui pointing red basic label">{error}</div>;
    }
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.handleFormSubmit)}
        className="ui error form">
        <Field
          name="title"
          component={this.renderFormInput}
          placeholder="Enter Title"
        />
        <Field
          name="description"
          component={this.renderFormInput}
          placeholder="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
