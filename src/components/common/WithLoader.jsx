import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import Either from './Either'
import { useSelector } from 'react-redux'

const WithLoader = ({ action, children }) => {
  const withLoader = useSelector(state => state.loadingReducer.withLoader)
  return (
    <Either
      condition={withLoader === action}
      ifTrue={
        <Grid container justify="center">
          <CircularProgress color="primary" />
        </Grid>
      }
      ifFalse={children}
    />
  )
}

export default WithLoader
