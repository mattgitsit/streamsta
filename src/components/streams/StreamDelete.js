import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';

import Modal from '../Modal';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent = () => {
    if (this.props.stream) {
      return `Are you sure you want to delete this stream with title: ${
        this.props.stream.title
      }?`;
    } else {
      return 'Are you sure you want to delete this stream?';
    }
  };

  renderActions = () => {
    return (
      <Fragment>
        <div onClick={this.handleDeleteClick} className="ui button negative">
          Delete
        </div>
        <div onClick={this.handleDismiss} className="ui button">
          Cancel
        </div>
      </Fragment>
    );
  };

  handleDeleteClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  handleDismiss = () => history.push('/');

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          handleDismiss={this.handleDismiss}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
