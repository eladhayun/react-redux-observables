// @flow
import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Actions from '../actions/homeActions'
import Text from '../components/common/typography/Text'
import PrimaryButton from '../components/common/buttons/PrimaryButton'

const styles = () => ({
  container: {
    height: '100%',
    background: 'var(--bg-color-1)'
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    flexBasis: 'initial'
  }
})

const Home = ({
  isLoading, requestData, data, classes
}) => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={classes.container}
  >
    <Grid
      item
      xs={12}
      className={classes.item}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          direction="column"
        >
          <PrimaryButton
            label="Get Data"
            onClick={requestData}
          />
          <Text
            label={data}
          />
        </Grid>
      )}
    </Grid>
  </Grid>
)

const mapStateToProps = (state) => state.homeReducer

const mapDispatchToProps = (dispatch) => ({
  requestData: () => dispatch(Actions.requestData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home))
