import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { requestVersion } from '../actions'
import { connect } from 'react-redux'

const Version = props => (
  <Grid container direction="column" alignItems="center">
    <Grid item xs={12}>
      {!props.isLoading && (
        <Button onClick={props.requestVersion}>Get Version</Button>
      )}
    </Grid>
    <Grid item xs={12}>
      {props.isLoading ? (
        <CircularProgress />
      ) : (
        <Typography variant="subtitle2">{props.version}</Typography>
      )}
    </Grid>
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
