import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({})

const PrimaryButton = ({
  label, className, classes, ...props
}) => (
  <Button
    variant="contained"
    color="primary"
    className={className}
    classes={{ root: classes.root }}
    {...props}
  >
    {label}
  </Button>
)

export default withStyles(styles)(PrimaryButton)
