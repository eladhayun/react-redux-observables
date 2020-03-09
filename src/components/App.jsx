import React from 'react'
import AppBar from './AppBar'
import ROUTES from '../consts/routesConsts'
import TabOne from './tabOne'
import TabTwo from './tabTwo'
import { Switch, Route, Redirect } from 'react-router'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route
            exact
            path={ROUTES.ROOT}
            render={() => <Redirect to={ROUTES.TAB_ONE} />}
          />
          <Route path={ROUTES.TAB_ONE} component={TabOne} />
          <Route path={ROUTES.TAB_TWO} component={TabTwo} />
        </Switch>
      </main>
    </div>
  )
}

export default App
