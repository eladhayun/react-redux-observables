import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  body2: {
    color: '#FFFFFF'
  }
})

const Text = ({ label, classes, className }) => (
  <Typography className={className} classes={{ body2: classes.body2 }}>
    {label}
  </Typography>
)

export default withStyles(styles)(Text)
