import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router'
import { IsEqual } from 'react-lodash'
import { withStyles } from '@material-ui/core/styles'
import ROUTES from '../constants/routes'

const styles = () => ({
  withAppBar: {
    height: 'calc(100% - 64px)'
  },
  withoutAppBar: {
    height: '100%'
  }
})

const WithAppBar = (children, classes) => (
  <React.Fragment>
    <AppBar
      position="static"
    >
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
        >
          React Redux Observable
        </Typography>
      </Toolbar>
    </AppBar>
    <div
      className={classes.withAppBar}
    >
      {children}
    </div>
  </React.Fragment>
)

const WithoutAppBar = (children, classes) => (
  <div
    className={classes.withoutAppBar}
  >
    {children}
  </div>
)

const App = ({ children, location, classes }) => (
  <div
    className="app"
  >
    <IsEqual
      value={location.pathname}
      other={ROUTES.LOGIN}
      yes={() => WithoutAppBar(children, classes)}
      no={() => WithAppBar(children, classes)}
    />
  </div>
)

export default withRouter(withStyles(styles)(App))
