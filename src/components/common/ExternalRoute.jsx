import React from 'react'
import { Route } from 'react-router'

const ExternalRoute = ({ path, to, exact = false }) => (
  <Route
    exact={exact}
    path={path}
    render={() => {
      window.location.href = to
      return null
    }}
  />
)

export default ExternalRoute
