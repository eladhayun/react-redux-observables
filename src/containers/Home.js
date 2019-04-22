import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import * as Actions from '../actions'

const Home = ({ isLoading, requestVersion, version }) => (
  <Grid container direction="column" alignItems="center">
    <Grid item xs={12}>
      {!isLoading && <Button onClick={requestVersion}>Get Version</Button>}
    </Grid>
    <Grid item xs={12}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Typography variant="subtitle2">{version}</Typography>
      )}
    </Grid>
  </Grid>
)

const mapStateToProps = state => state.homeReducer

const mapDispatchToProps = dispatch => ({
  requestVersion: () => dispatch(Actions.requestVersion())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
