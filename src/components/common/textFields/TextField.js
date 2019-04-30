// @flow
import React from 'react'
import MUITextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    color: 'var(--text-color-1)'
  },
  margin: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  input: {
    color: 'var(--text-color-2)'
  },
  inputFocused: {
    color: 'var(--text-color-1)'
  },
  inputUnderline: {
    '&&&&:hover:before': {
      borderBottomColor: 'var(--text-color-2)'
    },
    '&:before': {
      borderBottomColor: 'var(--text-color-2)'
    },
    '&:after': {
      borderBottomColor: 'var(--text-color-2)'
    }
  },
  inputLabel: {
    color: 'var(--text-color-2)'
  },
  inputLabelFocused: {
    color: 'var(--text-color-1) !important'
  }
})

const TextField = ({ classes, ...props }) => (
  <MUITextField
    className={classes.margin}
    InputLabelProps={{
      classes: {
        root: classes.inputLabel,
        focused: classes.inputLabelFocused
      }
    }}
    InputProps={{
      classes: {
        root: classes.input,
        focused: classes.inputFocused,
        underline: classes.inputUnderline
      }
    }}
    {...props}
  />
)

export default withStyles(styles)(TextField)
