import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import { requestVersion } from '../actions'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Version = props => (
  <Grid fluid>
    <Row center="xs">
      <Col xs={6} md={3}>
        <RaisedButton
          label="Get Version"
          primary={true}
          onClick={props.requestVersion}
        />
      </Col>
    </Row>
    <Row center="xs" className="version-container">
      <Col xs={6} md={3}>
        {props.isLoading ? <CircularProgress /> : props.version}
      </Col>
    </Row>
  </Grid>
)

const mapStateToProps = state => state.versionReducer

const mapDispatchToProps = dispatch => ({
  requestVersion: () => dispatch(requestVersion())
})

export default connect(mapStateToProps, mapDispatchToProps)(Version)
