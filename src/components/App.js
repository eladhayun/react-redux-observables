import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const App = props => (
  <div className="app">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          React Redux Observables
        </Typography>
      </Toolbar>
    </AppBar>
    <div className="root-container">{props.children}</div>
  </div>
)

export default App
