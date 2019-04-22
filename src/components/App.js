import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const App = ({ children }) => (
  <div className="app">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          React Redux Observable
        </Typography>
      </Toolbar>
    </AppBar>
    <div className="root-container">{children}</div>
  </div>
)

export default App
