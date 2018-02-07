import React from 'react';
import { requestVersion } from '../actions';
import { connect } from 'react-redux';

const Version = props => (
  <div>
    <code>{props}</code>
  </div>
);

const mapStateToProps = state => state.versionReducer;

const mapDispatchToProps = dispatch => ({
  requestVersion: () => dispatch(requestVersion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Version);
