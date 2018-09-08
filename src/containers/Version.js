import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { requestVersion } from '../actions'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Version = props => (
  <Grid fluid>
    <Row center="xs">
      <Col xs={6} md={3}>
        <Button onClick={props.requestVersion}>Get Version</Button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Version)
