import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import Either from './Either'

const WithLoader = ({ isLoading = false, children }) => {
  return (
    <Either
      condition={isLoading}
      thisOne={
        <Grid container justify="center">
          <CircularProgress color="secondary" />
        </Grid>
      }
      orThatOne={children}
    />
  )
}

export default WithLoader
