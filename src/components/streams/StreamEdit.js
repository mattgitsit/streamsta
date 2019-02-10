import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';

import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  handleSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (this.props.stream) {
      return (
        <div>
          <h3>Edit Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, 'title', 'description')}
            handleFormSubmit={this.handleSubmit}
          />
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
