import React, { useEffect } from 'react'
import logo from '../resources/logo.svg'
import { connect } from 'react-redux'
import Actions from '../actions'
import Either from '../components/common/Either'
import { CircularProgress, Box } from '@material-ui/core'

const App = ({ isLoading, version, requestVersion }) => {
  useEffect(() => {
    requestVersion()
  }, [requestVersion])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Box m={2}>
          <Either
            condition={isLoading}
            ifTrue={<CircularProgress />}
            ifFalse={version}
          />
        </Box>
      </header>
    </div>
  )
}

const mapStateToProps = state => state.appReducer

const mapDispatchToProps = dispatch => ({
  requestVersion: () => dispatch(Actions.requestVersion())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
