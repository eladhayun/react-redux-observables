import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import TextField from '../components/common/textFields/TextField'
import PrimaryButton from '../components/common/buttons/PrimaryButton'
import Actions from '../actions/loginActions'
import Text from '../components/common/typography/Text'

const styles = () => ({
  container: {
    height: '100%'
  },
  loginPane: {
    color: 'var(--text-color-1)',
    background: 'var(--bg-color-1)',
    height: '100%'
  },
  decorativePane: {
    height: '100%',
    width: '100%',
    color: 'var(--text-color-1)',
    background: 'var(--bg-color-1)'
  },
  textField: {
    width: '70%'
  },
  version: {
    position: 'absolute',
    bottom: 10
  },
  actionButton: {
    marginTop: 20,
    width: '70%'
  }
})

const Credentials = ({
  classes,
  username,
  password,
  loginFailed,
  changeUsername,
  changePassword,
  requestLogin
}) => (
  <>
    <TextField
      autoFocus
      className={classes.textField}
      error={loginFailed}
      label="Name"
      value={username}
      margin="normal"
      onChange={event => changeUsername(event.target.value)}
      onKeyPress={event =>
        event.key === 'Enter' && username && password && requestLogin(username, password)
      }
    />
    <TextField
      className={classes.textField}
      error={loginFailed}
      type="password"
      label="Password"
      value={password}
      margin="normal"
      onChange={event => changePassword(event.target.value)}
      onKeyPress={event =>
        event.key === 'Enter' && username && password && requestLogin(username, password)
      }
    />
    <PrimaryButton
      label="Login"
      className={classes.actionButton}
      disabled={!username || !password}
      onClick={() => requestLogin(username, password)}
    />
  </>
)

const Login = ({
  classes,
  version,
  username,
  password,
  loginFailed,
  changeUsername,
  changePassword,
  requestLogin
}) => (
  <Grid container className={classes.container}>
    <Grid item xs={3} className={classes.loginPane}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="max-height"
      >
        <Credentials
          classes={classes}
          username={username}
          password={password}
          loginFailed={loginFailed}
          changeUsername={changeUsername}
          changePassword={changePassword}
          requestLogin={requestLogin}
        />
        <Text label={`Version: ${version}`} className={classes.version} />
      </Grid>
    </Grid>
    <Grid item xs={9}>
      <div className={classes.decorativePane} />
    </Grid>
  </Grid>
)

const mapStateToProps = state => state.loginReducer

const mapDispatchToProps = dispatch => ({
  changeUsername: username => dispatch(Actions.changeUsername(username)),
  changePassword: password => dispatch(Actions.changePassword(password)),
  requestLogin: (username, password) => dispatch(Actions.requestLogin(username, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login))
